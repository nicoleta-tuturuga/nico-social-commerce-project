package com.social.commerce.facade.dto;

import com.social.commerce.core.constants.ErrorsConstants;
import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class RefreshTokenRequestDTO {

    @NotBlank(message = ErrorsConstants.ERROR_BLANK_FIELD_ERROR_CODE)
    private String refreshToken;

    @NotNull
    @Valid
    private ClientDTO clientDTO;
}
