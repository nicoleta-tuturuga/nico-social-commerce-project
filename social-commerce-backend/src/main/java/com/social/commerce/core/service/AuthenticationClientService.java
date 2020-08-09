package com.social.commerce.core.service;

import com.social.commerce.core.model.AuthenticationClient;

public interface AuthenticationClientService {

    AuthenticationClient getClientByClientId(String clientId);

    void validateClientCredentials(String clientId, String secret);
}
