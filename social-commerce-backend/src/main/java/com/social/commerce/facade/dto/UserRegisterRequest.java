package com.social.commerce.facade.dto;

import com.social.commerce.core.validation.constraints.UniqueEmailConstraint;
import com.social.commerce.core.validation.constraints.PasswordConstraint;
import com.social.commerce.core.validation.constraints.PhoneNumberConstraint;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import static com.social.commerce.core.constants.ErrorsConstants.ERROR_BLANK_FIELD_ERROR_CODE;
import static com.social.commerce.core.constants.ErrorsConstants.ERROR_CODE_INVALID_EMAIL;

@Getter
@Setter
@PasswordConstraint
public class UserRegisterRequest {

    @NotBlank(message = ERROR_BLANK_FIELD_ERROR_CODE)
    @Email(message = ERROR_CODE_INVALID_EMAIL)
    @UniqueEmailConstraint
    private String email;

    @NotBlank
    private String password;

    private String confirmPassword;

    @NotBlank(message = ERROR_BLANK_FIELD_ERROR_CODE)
    private String name;

    @PhoneNumberConstraint
    private String phoneNumber;
}
