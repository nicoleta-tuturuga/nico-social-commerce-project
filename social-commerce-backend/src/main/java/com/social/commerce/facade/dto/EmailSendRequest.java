package com.social.commerce.facade.dto;

import com.social.commerce.core.service.EmailTemplates;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
public class EmailSendRequest {

    private String to;
    private String subject;
    private Map<String, Object> variables;
    private EmailTemplates emailTemplates;
}
