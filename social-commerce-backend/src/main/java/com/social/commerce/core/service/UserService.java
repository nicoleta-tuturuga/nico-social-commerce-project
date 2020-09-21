package com.social.commerce.core.service;

import com.social.commerce.core.model.User;

public interface UserService {

    User addUser(User user);

    User getUserByEmail(String email);

    boolean isUserPresent(String email);

    void changePassword(String tokenValue, String newPassword);

    void confirmAccount(String tokenValue);
}
