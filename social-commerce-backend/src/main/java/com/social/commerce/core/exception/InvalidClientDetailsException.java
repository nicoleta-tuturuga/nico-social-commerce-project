package com.social.commerce.core.exception;

public class InvalidClientDetailsException extends InternationalizedException {

    public InvalidClientDetailsException(String errorCode) {
        super(errorCode, new Object[]{});
    }
}
