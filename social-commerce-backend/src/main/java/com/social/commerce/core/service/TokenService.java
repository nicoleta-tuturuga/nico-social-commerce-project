package com.social.commerce.core.service;

import com.social.commerce.core.model.Token;
import com.social.commerce.core.model.TokenTypes;

import java.util.Optional;

public interface TokenService {

    Token getToken(String token, TokenTypes tokenType);

    Optional<Token> getTokenForUser(String userEmail, TokenTypes tokenType);

    String getTokenValue(String token, TokenTypes tokenType);

    Token addToken(String userEmail, TokenTypes tokenType);

    boolean isTokenExpired(String token, TokenTypes tokenType);
}
