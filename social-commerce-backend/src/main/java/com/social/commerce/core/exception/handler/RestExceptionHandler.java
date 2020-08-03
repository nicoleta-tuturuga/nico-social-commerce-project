package com.social.commerce.core.exception.handler;

import com.social.commerce.core.constants.ErrorsConstants;
import com.social.commerce.core.exception.InternationalizedException;
import com.social.commerce.core.exception.InvalidClientDetailsException;
import com.social.commerce.core.exception.InvalidRefreshTokenException;
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

    @ExceptionHandler({InvalidClientDetailsException.class, InvalidRefreshTokenException.class})
    public ResponseEntity<String> handleInvalidClientDetailsException(InternationalizedException e, Locale locale) {
        return getErrorAsJson(HttpStatus.UNAUTHORIZED, e, locale);
    }


    @ExceptionHandler({InternationalizedException.class})
    public ResponseEntity<String> handleInternationalizedExceptions(InternationalizedException e, Locale locale) {
        return getErrorAsJson(HttpStatus.BAD_REQUEST, e, locale);
    }

    @Autowired
    public void setMessageSource(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    private ResponseEntity<String> getErrorAsJson(HttpStatus httpStatus, InternationalizedException e,
                                                  Locale locale) {
        return ResponseEntity.status(httpStatus)
                .body(String.format(ErrorsConstants.ERROR_MESSAGE_JSON_FORMAT,
                        messageSource.getMessage(e.getErrorCode(), e.getArgs(), locale)));
    }
}
