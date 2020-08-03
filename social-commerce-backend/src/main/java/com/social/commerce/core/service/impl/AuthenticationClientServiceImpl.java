package com.social.commerce.core.service.impl;

import com.social.commerce.core.constants.ErrorsConstants;
import com.social.commerce.core.dao.AuthenticationClientDAO;
import com.social.commerce.core.exception.ClientNotFoundException;
import com.social.commerce.core.exception.InvalidClientDetailsException;
import com.social.commerce.core.model.AuthenticationClient;
import com.social.commerce.core.service.AuthenticationClientService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationClientServiceImpl implements AuthenticationClientService {

    private static final String CLIENT_NOT_FOUND_ERROR_MESSAGE_FORMAT = "No client %s found!";
    private AuthenticationClientDAO authenticationClientDAO;

    @Override
    public AuthenticationClient getClientByClientId(String clientId) {
        return authenticationClientDAO.findByClientId(clientId).orElseThrow(() ->
                new ClientNotFoundException(String.format(CLIENT_NOT_FOUND_ERROR_MESSAGE_FORMAT, clientId)));
    }

    @Override
    public void validateClientCredentials(String clientId, String secret) {
        Optional<AuthenticationClient> client = authenticationClientDAO.findByClientId(clientId);

        if (client.isEmpty() || StringUtils.isBlank(secret) || !secret.equals(client.get().getSecret())) {
            throw new InvalidClientDetailsException(ErrorsConstants.UNAUTHORIZED_MESSAGE);
        }
    }

    @Autowired
    public void setAuthenticationClientDAO(AuthenticationClientDAO authenticationClientDAO) {
        this.authenticationClientDAO = authenticationClientDAO;
    }
}
