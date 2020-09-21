package com.social.commerce.facade;

import com.social.commerce.core.model.TokenTypes;

public interface TokenFacade {

    void sendToken(String userEmail, TokenTypes tokenType);
}
