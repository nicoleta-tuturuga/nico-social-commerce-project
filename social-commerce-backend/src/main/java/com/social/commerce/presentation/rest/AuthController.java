package com.social.commerce.presentation.rest;

import com.social.commerce.core.service.AuthenticationService;
import com.social.commerce.facade.UserFacade;
import com.social.commerce.facade.converter.Converter;
import com.social.commerce.facade.dto.LoginRequestDTO;
import com.social.commerce.facade.dto.RefreshTokenRequestDTO;
import com.social.commerce.facade.dto.UserRegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private UserFacade userFacade;
    private AuthenticationService authenticationService;
    private Converter<BindingResult, Map<String, String>> bindingResultMapConverter;

    @PostMapping("sign-up")
    private ResponseEntity<?> signUp(@Valid @RequestBody UserRegisterRequest userRegisterRequest,
                                     BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResultMapConverter.convert(bindingResult));
        }

        userFacade.addUser(userRegisterRequest);
        return ResponseEntity.ok().build();
    }

    @PostMapping
    private ResponseEntity<?> login(@Valid @RequestBody LoginRequestDTO loginRequestDTO,
                                    BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResultMapConverter.convert(bindingResult));
        }

        return ResponseEntity.ok().body(authenticationService
                .generateAuthenticationToken(loginRequestDTO));
    }

    @PostMapping("/refresh")
    private ResponseEntity<?> refreshToken(@Valid @RequestBody RefreshTokenRequestDTO refreshTokenRequestDTO,
                                           BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResultMapConverter.convert(bindingResult));
        }

        return ResponseEntity.ok().body(authenticationService
                .refreshAuthenticationToken(refreshTokenRequestDTO));
    }

    @Autowired
    public void setUserFacade(UserFacade userFacade) {
        this.userFacade = userFacade;
    }

    @Autowired
    public void setAuthenticationService(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @Autowired
    public void setBindingResultMapConverter(Converter<BindingResult, Map<String, String>> bindingResultMapConverter) {
        this.bindingResultMapConverter = bindingResultMapConverter;
    }
}
