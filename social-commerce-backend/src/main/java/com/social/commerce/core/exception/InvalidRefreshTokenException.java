package com.social.commerce.core.exception;

public class InvalidRefreshTokenException extends InternationalizedException {

    public InvalidRefreshTokenException(String errorCode) {
        super(errorCode, new Object[]{});
    }
}
