package com.social.commerce.core.validation.validator;

import com.google.i18n.phonenumbers.NumberParseException;
import com.google.i18n.phonenumbers.PhoneNumberUtil;
import com.google.i18n.phonenumbers.Phonenumber;
import com.social.commerce.core.constants.ErrorsConstants;
import com.social.commerce.core.validation.constraints.PhoneNumberConstraint;
import org.springframework.util.StringUtils;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PhoneNumberConstraintValidator implements ConstraintValidator<PhoneNumberConstraint, String> {

    private static final String ROMANIAN_COUNTRY_CODE = "RO";
    private PhoneNumberUtil phoneNumberUtil;

    @Override
    public void initialize(PhoneNumberConstraint constraintAnnotation) {
        this.phoneNumberUtil = PhoneNumberUtil.getInstance();
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (StringUtils.isEmpty(value)) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(ErrorsConstants.ERROR_BLANK_FIELD_ERROR_CODE)
                    .addConstraintViolation();
            return false;
        }

        try {
            Phonenumber.PhoneNumber number = phoneNumberUtil.parseAndKeepRawInput(value, ROMANIAN_COUNTRY_CODE);
            if (!phoneNumberUtil.isPossibleNumber(number) || !phoneNumberUtil.isValidNumberForRegion(number, ROMANIAN_COUNTRY_CODE)) {
                return false;
            }
        } catch (NumberParseException e) {
            return false;
        }

        return true;
    }
}
