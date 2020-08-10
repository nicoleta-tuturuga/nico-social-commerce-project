package com.social.commerce.core.service;

import com.social.commerce.facade.dto.EmailSendRequest;

public interface EmailService {

    void sendMessage(EmailSendRequest emailSendRequest);
}
