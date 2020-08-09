package com.social.commerce.facade.impl;

import com.social.commerce.core.service.UserService;
import com.social.commerce.facade.UserFacade;
import com.social.commerce.facade.converter.UserConverter;
import com.social.commerce.facade.dto.UserRegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserFacadeImpl implements UserFacade {

    private UserConverter userConverter;
    private UserService userService;

    @Override
    public void addUser(UserRegisterRequest userRegisterRequest) {
        userService.addUser(userConverter.userRegisterRequestDtoToUser(userRegisterRequest));
    }

    @Autowired
    public void setUserConverter(UserConverter userConverter) {
        this.userConverter = userConverter;
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}
