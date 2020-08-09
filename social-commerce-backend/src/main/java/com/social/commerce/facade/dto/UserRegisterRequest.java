package com.social.commerce.facade.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegisterRequest {

    private String email;
    private String password;
    private String confirmPassword;
    private String name;
}
