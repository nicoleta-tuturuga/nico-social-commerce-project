package com.social.commerce.core.utils;

import com.social.commerce.core.model.Token;
import com.social.commerce.core.model.TokenTypes;
import com.social.commerce.core.service.EmailTemplates;
import com.social.commerce.facade.dto.EmailSendRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class EmailTokenUtils {

    private static final String CLIENT_PASSWORD_RESET_LINK = "%s/tokens/password?token=%s";
    private static final String CLIENT_ACCOUNT_ACTIVATE_LINK = "%s/tokens/account-confirmation?token=%s";

    private MessageSource messageSource;

    @Value("${app.frontendClient.host:http://localhost:3000}")
    private String frontendClientHost;

    public EmailSendRequest getEmailRequestForToken(String email, Token token) {
        Map<String, Object> variables = new HashMap<>();

        EmailSendRequest emailSendRequest = new EmailSendRequest();
        emailSendRequest.setTo(email);
        emailSendRequest.setVariables(variables);
        variables.put("receiver", email);

        if (TokenTypes.PASSWORD_RESET == token.getTokenType().getType()) {
            variables.put("resetPasswordLink", String.format(CLIENT_PASSWORD_RESET_LINK, frontendClientHost,
                    token.getValue()));
            variables.put("resetPasswordLinkDueDate", token.getExpirationDateTime());
            emailSendRequest.setSubject(messageSource.getMessage("email.reset.password.subject", null,
                    LocaleContextHolder.getLocale()));
            emailSendRequest.setEmailTemplates(EmailTemplates.PASSWORD_RESET);
        } else if (TokenTypes.ACCOUNT_CONFIRM == token.getTokenType().getType()) {
            variables.put("confirmAccountLink", String.format(CLIENT_ACCOUNT_ACTIVATE_LINK, frontendClientHost,
                    token.getValue()));
            variables.put("confirmAccountLinkLinkDueDate", token.getExpirationDateTime());
            emailSendRequest.setSubject(messageSource.getMessage("email.confirm.account.subject", null,
                    LocaleContextHolder.getLocale()));
            emailSendRequest.setEmailTemplates(EmailTemplates.ACTIVATE_ACCOUNT);
        }

        return emailSendRequest;
    }

    @Autowired
    public void setMessageSource(MessageSource messageSource) {
        this.messageSource = messageSource;
    }
}
