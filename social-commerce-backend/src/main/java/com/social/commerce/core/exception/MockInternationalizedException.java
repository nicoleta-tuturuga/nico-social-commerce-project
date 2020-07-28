package com.social.commerce.core.exception;

public class MockInternationalizedException extends InternationalizedException {

    private static final String DEFAULT_ERROR_CODE = "mock.exception.message";

    public MockInternationalizedException(Object[] args) {
        super(DEFAULT_ERROR_CODE, args);
    }

}
