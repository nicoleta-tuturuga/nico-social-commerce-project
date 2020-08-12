package com.social.commerce.facade.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import static com.social.commerce.core.constants.ErrorsConstants.ERROR_BLANK_FIELD_ERROR_CODE;

@Getter
@Setter
public class LoginRequestDTO {

    @NotBlank(message = ERROR_BLANK_FIELD_ERROR_CODE)
    private String email;

    @NotBlank(message = ERROR_BLANK_FIELD_ERROR_CODE)
    private String password;

    @NotNull
    @Valid
    private ClientDTO clientDTO;
}
