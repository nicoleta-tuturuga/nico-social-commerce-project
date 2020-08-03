package com.social.commerce.core.dao;

import com.social.commerce.core.model.AuthenticationRefreshToken;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AuthenticationRefreshTokenDAO extends CrudRepository<AuthenticationRefreshToken, Long> {

    Optional<AuthenticationRefreshToken> findByAuthenticationClientClientIdAndToken(String clientId, String token);

    Optional<AuthenticationRefreshToken> findByAuthenticationClientClientIdAndUserEmail(String clientId, String email);
}
