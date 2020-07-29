package com.social.commerce.presentation.rest;

import com.social.commerce.core.service.AuthenticationTokenService;
import com.social.commerce.facade.UserFacade;
import com.social.commerce.facade.converter.Converter;
import com.social.commerce.facade.dto.LoginRequest;
import com.social.commerce.facade.dto.UserRegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
    private AuthenticationManager authenticationManager;
    private AuthenticationTokenService authenticationTokenService;
    private Converter<BindingResult, Map<String, String>> bindingResultMapConverter;

    //TODO add @Valid
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
    private ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest,
                                    BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResultMapConverter.convert(bindingResult));
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        return ResponseEntity.ok().body(authenticationTokenService.generateAuthenticationToken(authentication));
    }

    @Autowired
    public void setUserFacade(UserFacade userFacade) {
        this.userFacade = userFacade;
    }

    @Autowired
    public void setAuthenticationManager(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Autowired
    public void setAuthenticationTokenService(AuthenticationTokenService authenticationTokenService) {
        this.authenticationTokenService = authenticationTokenService;
    }

    @Autowired
    public void setBindingResultMapConverter(Converter<BindingResult, Map<String, String>> bindingResultMapConverter) {
        this.bindingResultMapConverter = bindingResultMapConverter;
    }
}
