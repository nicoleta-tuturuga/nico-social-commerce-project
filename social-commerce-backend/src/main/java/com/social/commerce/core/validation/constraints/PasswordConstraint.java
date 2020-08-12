package com.social.commerce.core.validation.constraints;


import com.social.commerce.core.validation.validator.PasswordConstraintValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target({TYPE})
@Retention(RUNTIME)
@Constraint(validatedBy = PasswordConstraintValidator.class)
public @interface PasswordConstraint {

    String message() default "error.invalid.password";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

    String passwordFieldName() default "password";

    String confirmPasswordFieldName() default "confirmPassword";

}
