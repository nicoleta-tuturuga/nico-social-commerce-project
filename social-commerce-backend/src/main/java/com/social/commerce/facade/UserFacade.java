package com.social.commerce.facade;

import com.social.commerce.facade.dto.PasswordChangeRequest;
import com.social.commerce.facade.dto.UserRegisterRequest;

public interface UserFacade {

    void addUser(UserRegisterRequest userRegisterRequest);

    boolean isUserPresent(String email);

    void resetPassword(PasswordChangeRequest passwordChangeRequest);

    void confirmAccount(String token);
}
