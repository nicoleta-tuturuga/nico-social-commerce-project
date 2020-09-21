package com.social.commerce.facade.impl;

import com.social.commerce.core.model.Token;
import com.social.commerce.core.model.TokenTypes;
import com.social.commerce.core.model.User;
import com.social.commerce.core.service.EmailService;
import com.social.commerce.core.service.TokenService;
import com.social.commerce.core.service.UserService;
import com.social.commerce.core.utils.EmailTokenUtils;
import com.social.commerce.facade.UserFacade;
import com.social.commerce.facade.converter.UserConverter;
import com.social.commerce.facade.dto.PasswordChangeRequest;
import com.social.commerce.facade.dto.UserRegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class UserFacadeImpl implements UserFacade {

    private UserConverter userConverter;
    private UserService userService;
    private EmailService emailService;
    private EmailTokenUtils emailTokenUtils;
    private TokenService tokenService;

    @Override
    public void addUser(UserRegisterRequest userRegisterRequest) {
        User user = userService.addUser(userConverter.userRegisterRequestDtoToUser(userRegisterRequest));
        Token token = tokenService.addToken(user.getEmail(), TokenTypes.ACCOUNT_CONFIRM);
        emailService.sendMessage(emailTokenUtils.getEmailRequestForToken(user.getEmail(), token));
    }

    @Override
    public boolean isUserPresent(String email) {
        return userService.isUserPresent(email);
    }

    @Override
    public void resetPassword(PasswordChangeRequest passwordChangeRequest) {
        userService.changePassword(passwordChangeRequest.getToken(), passwordChangeRequest.getNewPassword());
    }

    @Override
    public void confirmAccount(String token) {
        userService.confirmAccount(token);
    }

    @Autowired
    public void setUserConverter(UserConverter userConverter) {
        this.userConverter = userConverter;
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Autowired
    public void setEmailService(@Qualifier("reactiveEmailService") EmailService emailService) {
        this.emailService = emailService;
    }

    @Autowired
    public void setEmailTokenUtils(EmailTokenUtils emailTokenUtils) {
        this.emailTokenUtils = emailTokenUtils;
    }

    @Autowired
    public void setTokenService(TokenService tokenService) {
        this.tokenService = tokenService;
    }
}
