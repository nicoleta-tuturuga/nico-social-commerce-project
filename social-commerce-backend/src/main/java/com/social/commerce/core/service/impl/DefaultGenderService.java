package com.social.commerce.core.service.impl;

import com.social.commerce.core.dao.GenderDAO;
import com.social.commerce.core.model.Gender;
import com.social.commerce.core.service.GenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DefaultGenderService implements GenderService {

    @Autowired
    private GenderDAO genderDAO;

    @Override
    public Gender getGenderByCode(String code) {
        return genderDAO.findByCode(code);
    }
}
