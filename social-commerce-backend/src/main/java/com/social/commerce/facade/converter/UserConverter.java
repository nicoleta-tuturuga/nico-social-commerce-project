package com.social.commerce.facade.converter;

import com.social.commerce.core.model.User;
import com.social.commerce.facade.dto.UserRegisterRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface UserConverter {

    @Mappings({
            @Mapping(target = "email", source = "userRegisterRequest.email"),
            @Mapping(target = "name", source = "userRegisterRequest.name"),
            @Mapping(target = "password", source = "userRegisterRequest.password"),
            @Mapping(target = "phoneNumber", source = "userRegisterRequest.phoneNumber")
    })
    User userRegisterRequestDtoToUser(UserRegisterRequest userRegisterRequest);
}
