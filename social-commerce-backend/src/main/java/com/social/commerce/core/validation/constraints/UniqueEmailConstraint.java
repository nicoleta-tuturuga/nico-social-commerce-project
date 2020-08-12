package com.social.commerce.core.validation.constraints;


import com.social.commerce.core.validation.validator.UniqueEmailConstraintValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target(FIELD)
@Retention(RUNTIME)
@Constraint(validatedBy = UniqueEmailConstraintValidator.class)
public @interface UniqueEmailConstraint {

    String message() default "error.email.unique";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
