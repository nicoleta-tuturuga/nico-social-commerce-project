package com.social.commerce.core.validation.constraints;


import com.social.commerce.core.validation.validator.PhoneNumberConstraintValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = PhoneNumberConstraintValidator.class)
public @interface PhoneNumberConstraint {

    String message() default "error.invalid.phone.number";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
