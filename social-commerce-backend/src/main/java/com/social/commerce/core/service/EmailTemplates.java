package com.social.commerce.core.service;

public enum EmailTemplates {

    GENERIC("generic_email.html"),
    PASSWORD_RESET(""),
    ACTIVATE_ACCOUNT("");

    private String templateName;

    EmailTemplates(String templateName) {
        this.templateName = templateName;
    }

    public String getTemplateName() {
        return templateName;
    }
}
