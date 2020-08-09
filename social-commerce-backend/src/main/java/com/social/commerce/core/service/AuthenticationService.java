package com.social.commerce.core.service;

import com.social.commerce.facade.dto.AuthenticationTokenDTO;
import com.social.commerce.facade.dto.LoginRequestDTO;
import com.social.commerce.facade.dto.RefreshTokenRequestDTO;

public interface AuthenticationService {

    AuthenticationTokenDTO generateAuthenticationToken(LoginRequestDTO loginRequestDTO);

    boolean validateToken(String token);

    String getSubject(String token);

    AuthenticationTokenDTO refreshAuthenticationToken(RefreshTokenRequestDTO refreshTokenRequestDTO);
}
