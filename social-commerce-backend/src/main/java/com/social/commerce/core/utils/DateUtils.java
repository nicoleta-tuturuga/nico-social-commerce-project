package com.social.commerce.core.utils;

import java.time.LocalDateTime;

public final class DateUtils {

    private DateUtils() {

    }

    public static boolean isExpired(LocalDateTime expirationDate) {
        return expirationDate.isBefore(LocalDateTime.now());
    }
}
