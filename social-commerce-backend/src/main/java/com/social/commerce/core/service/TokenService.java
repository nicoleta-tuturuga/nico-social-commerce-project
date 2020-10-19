package com.social.commerce.core.service;

import com.social.commerce.core.model.Token;
import com.social.commerce.core.model.TokenTypes;

import java.util.Optional;

public interface TokenService {

    Optional<Token> getToken(String tokenValue);

    Optional<Token> getToken(String token, TokenTypes tokenType);

    Optional<Token> getTokenForUser(String userEmail, TokenTypes tokenType);

    Token addToken(String userEmail, TokenTypes tokenType);

    void markTokenAsUsed(String tokenValue);
}
