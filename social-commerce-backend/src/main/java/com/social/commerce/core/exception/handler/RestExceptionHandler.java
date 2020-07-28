package com.social.commerce.core.exception.handler;

import com.social.commerce.core.exception.InternationalizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Locale;

@ControllerAdvice
public class RestExceptionHandler {

    private static final String ERROR_MESSAGE_JSON_FORMAT = "{\"message\":\"%s\"}";
    private MessageSource messageSource;

    @ExceptionHandler({InternationalizedException.class})
    public ResponseEntity<String> handleInternationalizedExceptions(InternationalizedException e, Locale locale) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(String.format(ERROR_MESSAGE_JSON_FORMAT,
                        messageSource.getMessage(e.getErrorCode(), e.getArgs(), locale)));
    }

    @Autowired
    public void setMessageSource(MessageSource messageSource) {
        this.messageSource = messageSource;
    }
}
