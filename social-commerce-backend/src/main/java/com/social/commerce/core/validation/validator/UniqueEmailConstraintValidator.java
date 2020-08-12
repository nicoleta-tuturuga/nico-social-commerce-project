package com.social.commerce.core.validation.validator;

import com.social.commerce.core.dao.UserDAO;
import com.social.commerce.core.validation.constraints.UniqueEmailConstraint;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class UniqueEmailConstraintValidator implements ConstraintValidator<UniqueEmailConstraint, String> {

    private UserDAO userDAO;

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return userDAO.findUserByEmail(value).isEmpty();
    }

    @Autowired
    public void setUserDAO(UserDAO userDAO) {
        this.userDAO = userDAO;
    }
}
