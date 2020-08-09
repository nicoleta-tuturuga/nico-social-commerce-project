package com.social.commerce.core.exception.handler;

import com.social.commerce.core.exception.AuthenticationTokenExpiredException;
import com.social.commerce.core.exception.InternationalizedException;
import com.social.commerce.core.exception.InvalidClientDetailsException;
import com.social.commerce.core.exception.InvalidRefreshTokenException;
import com.social.commerce.facade.dto.ErrorMessageDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Locale;

@ControllerAdvice
public class RestExceptionHandler {

    private MessageSource messageSource;

    @ExceptionHandler({AuthenticationTokenExpiredException.class})
    public ResponseEntity<ErrorMessageDTO> handleAuthenticationTokenExpiredException(AuthenticationTokenExpiredException e,
                                                                                     Locale locale) {
        return getErrorResponseEntity(HttpStatus.UNAUTHORIZED, "auth.token.expired", e, locale);
    }

    @ExceptionHandler({InvalidClientDetailsException.class, InvalidRefreshTokenException.class})
    public ResponseEntity<ErrorMessageDTO> handleInvalidClientDetailsException(InternationalizedException e,
                                                                               Locale locale) {
        return getErrorResponseEntity(HttpStatus.UNAUTHORIZED, "unauthorized", e, locale);
    }

    @ExceptionHandler({InternationalizedException.class})
    public ResponseEntity<ErrorMessageDTO> handleInternationalizedExceptions(InternationalizedException e,
                                                                             Locale locale) {
        return getErrorResponseEntity(HttpStatus.BAD_REQUEST, "bad.request", e, locale);
    }

    @Autowired
    public void setMessageSource(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    private ResponseEntity<ErrorMessageDTO> getErrorResponseEntity(HttpStatus httpStatus, String errorTitle,
                                                                   InternationalizedException e, Locale locale) {
        return ResponseEntity.status(httpStatus).body(new ErrorMessageDTO(errorTitle,
                messageSource.getMessage(e.getErrorCode(), e.getArgs(), locale)));
    }
}
