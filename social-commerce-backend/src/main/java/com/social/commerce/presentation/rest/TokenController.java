package com.social.commerce.presentation.rest;

import com.social.commerce.core.constants.ErrorsConstants;
import com.social.commerce.core.model.TokenTypes;
import com.social.commerce.facade.TokenFacade;
import com.social.commerce.facade.UserFacade;
import com.social.commerce.facade.converter.Converter;
import com.social.commerce.facade.dto.PasswordChangeRequest;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.Locale;
import java.util.Map;

@RestController
@RequestMapping("/tokens")
public class TokenController {

    private static final String NO_USER_FOUND_WITH_PROVIDED_EMAIL_ERROR_CODE =
            "error.no.user.found.with.provided.email.on.email.send";

    private TokenFacade tokenFacade;
    private UserFacade userFacade;
    private MessageSource messageSource;
    private Converter<BindingResult, Map<String, String>> bindingResultMapConverter;

    @PostMapping("/password")
    public ResponseEntity<?> requestPasswordResetToken(@RequestParam("email") String email,
                                                       Locale locale) {
        Map<String, String> errors = validateEmail(email, locale);
        if (!errors.isEmpty()) {
            return ResponseEntity.badRequest().body(errors);
        }

        tokenFacade.sendToken(email, TokenTypes.PASSWORD_RESET);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/password")
    public ResponseEntity<?> resetPassword(@Valid @RequestBody PasswordChangeRequest passwordChangeRequest,
                                           BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResultMapConverter.convert(bindingResult));
        }

        userFacade.resetPassword(passwordChangeRequest);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/account-confirmation")
    public ResponseEntity<?> sendAccountConfirmationToken(@RequestParam("email") String email,
                                                          Locale locale) {
        Map<String, String> errors = validateEmail(email, locale);
        if (!errors.isEmpty()) {
            return ResponseEntity.badRequest().body(errors);
        }

        tokenFacade.sendToken(email, TokenTypes.ACCOUNT_CONFIRM);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/account-confirmation")
    public ResponseEntity<?> confirmAccount(@RequestParam("token") String token, Locale locale) {
        if (StringUtils.isBlank(token)) {
            return ResponseEntity.badRequest().body(Map.of(
                    "token", messageSource.getMessage(ErrorsConstants.ERROR_BLANK_FIELD_ERROR_CODE,
                            new Object[]{"token"}, locale)));
        }

        userFacade.confirmAccount(token);

        return ResponseEntity.ok().build();
    }

    @Autowired
    public void setTokenFacade(TokenFacade tokenFacade) {
        this.tokenFacade = tokenFacade;
    }

    @Autowired
    public void setMessageSource(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    @Autowired
    public void setBindingResultMapConverter(Converter<BindingResult, Map<String, String>> bindingResultMapConverter) {
        this.bindingResultMapConverter = bindingResultMapConverter;
    }

    @Autowired
    public void setUserFacade(UserFacade userFacade) {
        this.userFacade = userFacade;
    }

    private Map<String, String> validateEmail(String email, Locale locale) {
        if (StringUtils.isBlank(email)) {
            return Map.of("email", messageSource.getMessage(ErrorsConstants.ERROR_BLANK_FIELD_ERROR_CODE,
                    new Object[]{"email"}, locale));
        }

        if (!userFacade.isUserPresent(email)) {
            return Map.of("message", messageSource.getMessage(NO_USER_FOUND_WITH_PROVIDED_EMAIL_ERROR_CODE,
                    null, locale));
        }

        return Collections.emptyMap();
    }
}
