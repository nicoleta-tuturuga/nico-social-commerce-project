package com.social.commerce.core.service.impl;

import com.social.commerce.core.constants.ErrorsConstants;
import com.social.commerce.core.exception.InvalidRefreshTokenException;
import com.social.commerce.core.exception.AuthenticationTokenExpiredException;
import com.social.commerce.core.model.AuthenticationRefreshToken;
import com.social.commerce.core.model.User;
import com.social.commerce.core.service.AuthenticationClientService;
import com.social.commerce.core.service.AuthenticationRefreshTokenService;
import com.social.commerce.core.service.AuthenticationService;
import com.social.commerce.facade.dto.AuthenticationTokenDTO;
import com.social.commerce.facade.dto.LoginRequestDTO;
import com.social.commerce.facade.dto.RefreshTokenRequestDTO;
import io.jsonwebtoken.*;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Date;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    private static final Logger LOGGER = Logger.getLogger(AuthenticationServiceImpl.class);

    @Value("${app.security.tokenValidityTimeInMinutes:60}")
    private long tokenValidityTimeInMinutes;

    @Value("${app.security.secret:1234}")
    private String secret;

    private AuthenticationRefreshTokenService authenticationRefreshTokenService;
    private AuthenticationClientService authenticationClientService;
    private AuthenticationManager authenticationManager;

    @Transactional
    @Override
    public AuthenticationTokenDTO generateAuthenticationToken(LoginRequestDTO loginRequestDTO) {
        authenticationClientService.validateClientCredentials(loginRequestDTO.getClientDTO().getClientId(),
                loginRequestDTO.getClientDTO().getSecret());

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequestDTO.getEmail(), loginRequestDTO.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        return generateAuthenticationToken(Collections.emptyMap(), authentication.getName(),
                loginRequestDTO.getClientDTO().getClientId());
    }

    @Override
    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secret.getBytes(StandardCharsets.UTF_8)).parseClaimsJws(token);
            return false;
        } catch (ExpiredJwtException e) {
            throw new AuthenticationTokenExpiredException();
        } catch (UnsupportedJwtException | MalformedJwtException
                | SignatureException | IllegalArgumentException e) {
            LOGGER.error("Invalid token!", e);
        }
        return false;
    }

    @Override
    public String getSubject(String token) {
        return Jwts.parser()
                .setSigningKey(secret.getBytes(StandardCharsets.UTF_8))
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    @Transactional
    @Override
    public AuthenticationTokenDTO refreshAuthenticationToken(RefreshTokenRequestDTO refreshTokenRequestDTO) {
        String clientId = refreshTokenRequestDTO.getClientDTO().getClientId();

        authenticationClientService.validateClientCredentials(clientId,
                refreshTokenRequestDTO.getClientDTO().getSecret());
        Optional<AuthenticationRefreshToken> refreshToken = authenticationRefreshTokenService
                .getAuthenticationRefreshToken(clientId, refreshTokenRequestDTO.getRefreshToken());

        if (refreshToken.isEmpty() || refreshToken.get().getExpirationDateTime().isBefore(LocalDateTime.now())) {
            throw new InvalidRefreshTokenException(ErrorsConstants.UNAUTHORIZED_MESSAGE);
        }

        User user = refreshToken.get().getUser();

        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), null);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        return generateAuthenticationToken(Collections.emptyMap(), authentication.getName(), clientId);
    }

    @Autowired
    public void setAuthenticationRefreshTokenService(AuthenticationRefreshTokenService authenticationRefreshTokenService) {
        this.authenticationRefreshTokenService = authenticationRefreshTokenService;
    }

    @Autowired
    public void setAuthenticationClientService(AuthenticationClientService authenticationClientService) {
        this.authenticationClientService = authenticationClientService;
    }

    @Autowired
    public void setAuthenticationManager(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    private AuthenticationTokenDTO generateAuthenticationToken(Map<String, Object> claims, String userEmail,
                                                               String clientId) {
        Date now = new Date();
        Date expirationDate = new Date(now.getTime() + TimeUnit.MINUTES.toMillis(tokenValidityTimeInMinutes));

        String accessTokenValue = Jwts.builder()
                .setSubject(userEmail)
                .setIssuedAt(new Date())
                .addClaims(claims)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();

        return new AuthenticationTokenDTO(accessTokenValue, expirationDate.getTime(),
                authenticationRefreshTokenService.getRefreshTokenForUser(userEmail, clientId));
    }
}
