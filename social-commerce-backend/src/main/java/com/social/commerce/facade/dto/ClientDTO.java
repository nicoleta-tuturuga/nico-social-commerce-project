package com.social.commerce.facade.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class ClientDTO {

    @NotBlank
    private String clientId;

    @NotBlank
    private String secret;
}
