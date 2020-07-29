package com.social.commerce.core.service;

import com.social.commerce.facade.dto.AuthenticationTokenDTO;
import org.springframework.security.core.Authentication;

import java.util.Map;

public interface AuthenticationTokenService {

    AuthenticationTokenDTO generateAuthenticationToken(Authentication authentication);

    AuthenticationTokenDTO generateAuthenticationToken(Map<String, Object> claims, String signature);

    boolean validateToken(String token);

    String getSubject(String token);
}
