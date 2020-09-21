package com.social.commerce.facade.dto;

import com.social.commerce.core.constants.ErrorsConstants;
import com.social.commerce.core.validation.constraints.PasswordConstraint;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@PasswordConstraint(passwordFieldName = "newPassword", confirmPasswordFieldName = "confirmNewPassword")
public class PasswordChangeRequest {

    @NotBlank(message = ErrorsConstants.ERROR_BLANK_FIELD_ERROR_CODE)
    private String token;
    private String newPassword;
    private String confirmNewPassword;
}
