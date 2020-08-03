package com.social.commerce.facade.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class RefreshTokenRequestDTO {

    @NotBlank
    private String refreshToken;

    @NotNull
    @Valid
    private ClientDTO clientDTO;
}
