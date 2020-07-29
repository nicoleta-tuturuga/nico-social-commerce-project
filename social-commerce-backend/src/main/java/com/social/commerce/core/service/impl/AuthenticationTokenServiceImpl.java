package com.social.commerce.core.service.impl;

import com.social.commerce.core.service.AuthenticationTokenService;
import com.social.commerce.facade.dto.AuthenticationTokenDTO;
import io.jsonwebtoken.*;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.Date;
import java.util.Map;

@Service
public class AuthenticationTokenServiceImpl implements AuthenticationTokenService {

    private static final Logger LOGGER = Logger.getLogger(AuthenticationTokenServiceImpl.class);

    @Value("${app.security.tokenValidityTimeInMinutes:60}")
    private long tokenValidityTimeInMinutes;

    @Value("${app.security.secret:60}")
    private String secret;

    @Override
    public AuthenticationTokenDTO generateAuthenticationToken(Authentication authentication) {
        return generateAuthenticationToken(Collections.emptyMap(), authentication.getName());
    }

    @Override
    public AuthenticationTokenDTO generateAuthenticationToken(Map<String, Object> claims, String signature) {
        Date now = new Date();
        Date expirationDate = new Date(now.getTime() + tokenValidityTimeInMinutes);

        String accessTokenValue = Jwts.builder()
                .setSubject(signature)
                .setIssuedAt(new Date())
                .addClaims(claims)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();

        return new AuthenticationTokenDTO(accessTokenValue, expirationDate.getTime());
    }

    @Override
    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secret.getBytes(StandardCharsets.UTF_8)).parseClaimsJws(token);
            return false;
        } catch (ExpiredJwtException | UnsupportedJwtException | MalformedJwtException | SignatureException | IllegalArgumentException e) {
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
}
