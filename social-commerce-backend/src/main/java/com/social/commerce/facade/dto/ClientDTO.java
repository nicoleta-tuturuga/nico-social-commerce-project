package com.social.commerce.facade.dto;

import lombok.Getter;
import lombok.Setter;


import javax.validation.constraints.NotBlank;

import static com.social.commerce.core.constants.ErrorsConstants.ERROR_BLANK_FIELD_ERROR_CODE;

@Getter
@Setter
public class ClientDTO {

    @NotBlank(message = ERROR_BLANK_FIELD_ERROR_CODE)
    private String clientId;

    @NotBlank(message = ERROR_BLANK_FIELD_ERROR_CODE)
    private String secret;
}
