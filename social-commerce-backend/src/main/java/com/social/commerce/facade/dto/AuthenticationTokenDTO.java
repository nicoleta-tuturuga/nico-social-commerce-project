package com.social.commerce.facade.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class AuthenticationTokenDTO {

    private String accessToken;
    private long expiration;
    private String refreshToken;
}
