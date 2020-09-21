package com.social.commerce.facade.impl;

import com.social.commerce.core.model.Token;
import com.social.commerce.core.model.TokenTypes;
import com.social.commerce.core.service.EmailService;
import com.social.commerce.core.service.TokenService;
import com.social.commerce.core.utils.EmailTokenUtils;
import com.social.commerce.facade.TokenFacade;
import com.social.commerce.facade.dto.PasswordChangeRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class TokenFacadeImpl implements TokenFacade {

    private EmailService emailService;
    private TokenService tokenService;
    private EmailTokenUtils emailTokenUtils;

    @Override
    public void sendToken(String userEmail, TokenTypes tokenType) {
        Token token = tokenService.addToken(userEmail, tokenType);

        emailService.sendMessage(emailTokenUtils.getEmailRequestForToken(userEmail, token));
    }

    @Autowired
    public void setEmailService(@Qualifier("reactiveEmailService") EmailService emailService) {
        this.emailService = emailService;
    }

    @Autowired
    public void setTokenService(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @Autowired
    public void setEmailTokenUtils(EmailTokenUtils emailTokenUtils) {
        this.emailTokenUtils = emailTokenUtils;
    }
}