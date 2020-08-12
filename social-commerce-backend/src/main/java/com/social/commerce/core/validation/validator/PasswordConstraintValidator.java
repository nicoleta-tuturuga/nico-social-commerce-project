package com.social.commerce.core.validation.validator;

import com.social.commerce.core.constants.ErrorsConstants;
import com.social.commerce.core.validation.constraints.PasswordConstraint;
import org.springframework.beans.BeanWrapperImpl;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PasswordConstraintValidator implements ConstraintValidator<PasswordConstraint, Object> {

    private static final String PASSWORD_REGEX = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$";
    private String passwordFieldName;
    private String confirmPasswordFieldName;

    @Override
    public void initialize(PasswordConstraint constraintAnnotation) {
        passwordFieldName = constraintAnnotation.passwordFieldName();
        confirmPasswordFieldName = constraintAnnotation.confirmPasswordFieldName();
    }

    @Override
    public boolean isValid(Object value, ConstraintValidatorContext context) {
        Object fieldValue = new BeanWrapperImpl(value).getPropertyValue(passwordFieldName);
        Object confirmFieldValue = new BeanWrapperImpl(value).getPropertyValue(confirmPasswordFieldName);

        if (fieldValue == null || fieldValue.toString().trim().isEmpty()) {
            changeDefaultContextMessage(context, ErrorsConstants.ERROR_BLANK_FIELD_ERROR_CODE, passwordFieldName);
            return false;
        }

        if (!fieldValue.toString().matches(PASSWORD_REGEX)) {
            changeDefaultContextMessage(context, context.getDefaultConstraintMessageTemplate(), passwordFieldName);
            return false;
        }

        if (!fieldValue.equals(confirmFieldValue)) {
            changeDefaultContextMessage(context, "error.password.must.match", passwordFieldName);
            return false;
        }

        return true;
    }

    private void changeDefaultContextMessage(ConstraintValidatorContext context, String errorCode, String fieldName) {
        context.disableDefaultConstraintViolation();
        context.buildConstraintViolationWithTemplate(errorCode)
                .addPropertyNode(fieldName)
                .addConstraintViolation();
    }
}
