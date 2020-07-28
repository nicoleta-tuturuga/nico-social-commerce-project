package com.social.commerce.core.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public abstract class InternationalizedException extends RuntimeException {

    private String errorCode;
    private Object[] args;
}
