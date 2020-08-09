package com.social.commerce.core.dao;

import com.social.commerce.core.model.AuthenticationClient;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AuthenticationClientDAO extends CrudRepository<AuthenticationClient, Long> {

    Optional<AuthenticationClient> findByClientId(String clientId);
}
