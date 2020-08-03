package com.social.commerce.core.service.impl;

import com.social.commerce.core.dao.TokenDAO;
import com.social.commerce.core.dao.TokenTypeDAO;
import com.social.commerce.core.exception.TokenNotFoundException;
import com.social.commerce.core.exception.TokenTypeNotFoundException;
import com.social.commerce.core.model.Token;
import com.social.commerce.core.model.TokenTypes;
import com.social.commerce.core.service.TokenService;
import com.social.commerce.core.service.UserService;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class TokenServiceImpl implements TokenService {

    private static final String TOKEN_NOT_FOUND_ERROR_MESSAGE_FORMAT = "No token %s found in %s tokens!";
    private static final String TOKEN_TYPE_NOT_FOUND_ERROR_MESSAGE_FORMAT = "No token type %s found!";
    private TokenDAO tokenDAO;
    private TokenTypeDAO tokenTypeDAO;
    private UserService userService;

    @Override
    public Token getToken(String token, TokenTypes tokenType) {
        return tokenDAO.findTokenByValueAndTokenTypeType(token, tokenType)
                .orElseThrow(() -> new TokenNotFoundException(
                        String.format(TOKEN_NOT_FOUND_ERROR_MESSAGE_FORMAT, token, tokenType)));
    }

    @Override
    public Optional<Token> getTokenForUser(String userEmail, TokenTypes tokenType) {
        return tokenDAO.findTokenByUserEmailAndTokenTypeType(userEmail, tokenType);
    }

    @Override
    public String getTokenValue(String token, TokenTypes tokenType) {
        return getToken(token, tokenType).getValue();
    }

    @Override
    public Token addToken(String userEmail, TokenTypes tokenType) {
        getTokenForUser(userEmail, tokenType).ifPresent(tokenDAO::delete);

        Token token = new Token();
        token.setValue(RandomStringUtils.random(100, true, true));
        token.setTokenType(tokenTypeDAO.findTokenTypeByType(tokenType).orElseThrow(() ->
                new TokenTypeNotFoundException(String.format(
                        TOKEN_TYPE_NOT_FOUND_ERROR_MESSAGE_FORMAT, tokenType.toString()))));
        token.setExpirationDateTime(LocalDateTime.now().plusMinutes(tokenType.getValidityTimeInMinutes()));
        token.setUser(userService.getUserByEmail(userEmail));

        return tokenDAO.save(token);
    }

    @Override
    public boolean isTokenExpired(String token, TokenTypes tokenType) {
        return getToken(token, tokenType)
                .getExpirationDateTime().isAfter(LocalDateTime.now());
    }

    @Autowired
    public void setTokenDAO(TokenDAO tokenDAO) {
        this.tokenDAO = tokenDAO;
    }

    @Autowired
    public void setTokenTypeDAO(TokenTypeDAO tokenTypeDAO) {
        this.tokenTypeDAO = tokenTypeDAO;
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}
