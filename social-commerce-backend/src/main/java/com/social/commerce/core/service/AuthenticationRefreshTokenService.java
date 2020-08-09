package com.social.commerce.core.service;

import com.social.commerce.core.model.AuthenticationRefreshToken;

import java.util.Optional;

public interface AuthenticationRefreshTokenService {

    AuthenticationRefreshToken createAuthenticationRefreshToken(String userEmail, String clientId);

    Optional<AuthenticationRefreshToken> getAuthenticationRefreshTokenForUser(String clientId, String userEmail);

    Optional<AuthenticationRefreshToken> getAuthenticationRefreshToken(String clientId, String token);

    String getRefreshTokenForUser(String userEmail, String clientId);
}
