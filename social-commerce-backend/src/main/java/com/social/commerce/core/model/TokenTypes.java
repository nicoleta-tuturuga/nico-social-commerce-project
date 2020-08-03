package com.social.commerce.core.model;

public enum TokenTypes {
    PASSWORD_RESET(60), ACCOUNT_CONFIRM(60);

    private long validityTimeInMinutes;

    TokenTypes(long validityTimeInMinutes) {
        this.validityTimeInMinutes = validityTimeInMinutes;
    }

    public long getValidityTimeInMinutes() {
        return validityTimeInMinutes;
    }
}
