package com.social.commerce.core.exception;

public class InvalidTokenException extends InternationalizedException {

    public InvalidTokenException(String errorCode, Object[] args) {
        super(errorCode, args);
    }
}
