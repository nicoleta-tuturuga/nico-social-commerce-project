package com.social.commerce.facade;

import com.social.commerce.facade.dto.UserRegisterRequest;

public interface UserFacade {

    void addUser(UserRegisterRequest userRegisterRequest);
}
