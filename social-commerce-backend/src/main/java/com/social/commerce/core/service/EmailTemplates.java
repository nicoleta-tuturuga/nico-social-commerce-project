package com.social.commerce.core.service;

public enum EmailTemplates {

    GENERIC("generic_email.html"),
    PASSWORD_RESET("password_reset_email.html"),
    ACTIVATE_ACCOUNT("confirm_account_email.html");

    private String templateName;

    EmailTemplates(String templateName) {
        this.templateName = templateName;
    }

    public String getTemplateName() {
        return templateName;
    }
}
