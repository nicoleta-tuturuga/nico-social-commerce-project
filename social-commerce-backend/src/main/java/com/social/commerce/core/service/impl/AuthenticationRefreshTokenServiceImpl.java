package com.social.commerce.core.service.impl;

import com.social.commerce.core.dao.AuthenticationRefreshTokenDAO;
import com.social.commerce.core.model.AuthenticationRefreshToken;
import com.social.commerce.core.service.AuthenticationClientService;
import com.social.commerce.core.service.AuthenticationRefreshTokenService;
import com.social.commerce.core.service.UserService;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AuthenticationRefreshTokenServiceImpl implements AuthenticationRefreshTokenService {

    private AuthenticationRefreshTokenDAO refreshTokenDAO;
    private AuthenticationClientService clientService;
    private UserService userService;

    @Value("${app.security.resetTokenValidityTimeInDays:14}")
    private long resetTokenValidityTimeInDays;

    @Override
    public AuthenticationRefreshToken createAuthenticationRefreshToken(String userEmail, String clientId) {
        getAuthenticationRefreshTokenForUser(clientId, userEmail).ifPresent(refreshTokenDAO::delete);

        AuthenticationRefreshToken refreshToken = new AuthenticationRefreshToken();
        refreshToken.setToken(RandomStringUtils.random(100, true, true));
        refreshToken.setAuthenticationClient(clientService.getClientByClientId(clientId));
        refreshToken.setUser(userService.getUserByEmail(userEmail));
        refreshToken.setExpirationDateTime(LocalDateTime.now().plusDays(resetTokenValidityTimeInDays));

        return refreshTokenDAO.save(refreshToken);
    }

    @Override
    public Optional<AuthenticationRefreshToken> getAuthenticationRefreshTokenForUser(String clientId, String userEmail) {
        return refreshTokenDAO.findByAuthenticationClientClientIdAndUserEmail(clientId, userEmail);
    }

    @Override
    public Optional<AuthenticationRefreshToken> getAuthenticationRefreshToken(String clientId, String token) {
        return refreshTokenDAO.findByAuthenticationClientClientIdAndToken(clientId, token);
    }

    @Override
    public String getRefreshTokenForUser(String userEmail, String clientId) {
        Optional<AuthenticationRefreshToken> refreshToken = getAuthenticationRefreshTokenForUser(clientId, userEmail);

        if (refreshToken.isEmpty() || refreshToken.get().getExpirationDateTime().isBefore(LocalDateTime.now())) {
            refreshToken = Optional.of(createAuthenticationRefreshToken(userEmail, clientId));
        }

        return refreshToken.get().getToken();
    }

    @Autowired
    public void setRefreshTokenDAO(AuthenticationRefreshTokenDAO refreshTokenDAO) {
        this.refreshTokenDAO = refreshTokenDAO;
    }

    @Autowired
    public void setClientService(AuthenticationClientService clientService) {
        this.clientService = clientService;
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}
