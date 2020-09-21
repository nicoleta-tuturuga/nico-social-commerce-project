package com.social.commerce.core.exception;

public class AuthenticationTokenExpiredException extends InternationalizedException {

    private static final String DEFAULT_ERROR_CODE = "auth.token.expired.exception";

    public AuthenticationTokenExpiredException() {
        super(DEFAULT_ERROR_CODE, new Object[]{});
    }
}
