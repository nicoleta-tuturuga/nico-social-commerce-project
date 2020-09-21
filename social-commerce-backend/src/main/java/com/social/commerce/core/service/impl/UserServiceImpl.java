package com.social.commerce.core.service.impl;

import com.social.commerce.core.dao.UserDAO;
import com.social.commerce.core.exception.InvalidTokenException;
import com.social.commerce.core.exception.UserNotFoundException;
import com.social.commerce.core.model.Token;
import com.social.commerce.core.model.TokenTypes;
import com.social.commerce.core.model.User;
import com.social.commerce.core.service.TokenService;
import com.social.commerce.core.service.UserService;
import com.social.commerce.core.utils.DateUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class UserServiceImpl implements UserService {

    private static final Logger LOGGER = Logger.getLogger(UserServiceImpl.class);
    private static final String USER_NOT_FOUND_EXCEPTION_MESSAGE_FORMAT = "No user %s found!";
    private UserDAO userDAO;
    private PasswordEncoder passwordEncoder;
    private TokenService tokenService;

    @Override
    public User addUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setLastPasswordUpdate(LocalDateTime.now());
        return userDAO.save(user);
    }

    @Override
    public User getUserByEmail(String email) {
        return userDAO.findUserByEmail(email).orElseThrow(() -> new UserNotFoundException(
                String.format(USER_NOT_FOUND_EXCEPTION_MESSAGE_FORMAT, email)));
    }

    @Override
    public boolean isUserPresent(String email) {
        return userDAO.findUserByEmail(email).isPresent();
    }

    @Transactional
    @Override
    public void changePassword(String tokenValue, String newPassword) {
        Token token = getValidToken(tokenValue, TokenTypes.PASSWORD_RESET);
        tokenService.markTokenAsUsed(tokenValue);

        User user = token.getUser();
        user.setPassword(passwordEncoder.encode(newPassword));
        userDAO.save(user);
    }

    @Transactional
    @Override
    public void confirmAccount(String tokenValue) {
        Token token = getValidToken(tokenValue, TokenTypes.ACCOUNT_CONFIRM);

        User user = token.getUser();
        user.setValidated(true);
        userDAO.save(user);
    }

    @Autowired
    public void setTokenService(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @Autowired
    public void setUserDAO(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @Autowired
    public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    private Token getValidToken(String tokenValue, TokenTypes tokenType) {
        Token token = tokenService.getToken(tokenValue, tokenType)
                .orElseThrow(() -> new InvalidTokenException("error.token.invalid", new Object[]{}));

        if (token.isUsed()) {
            throw new InvalidTokenException("error.token.used", new Object[]{});
        }
        if (DateUtils.isExpired(token.getExpirationDateTime())) {
            throw new InvalidTokenException("error.token.expired", new Object[]{});
        }
        if (!tokenType.equals(token.getTokenType().getType())) {
            throw new InvalidTokenException("error.token.invalid", new Object[]{});
        }

        return token;
    }
}
