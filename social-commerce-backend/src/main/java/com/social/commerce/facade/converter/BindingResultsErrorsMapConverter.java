package com.social.commerce.facade.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.Map;
import java.util.stream.Collectors;

@Component
public class BindingResultsErrorsMapConverter implements Converter<BindingResult, Map<String, String>> {

    private ResourceBundleMessageSource resourceBundleMessageSource;

    @Override
    public Map<String, String> convert(BindingResult source) {
        return source.getFieldErrors().stream().collect(Collectors.toMap(FieldError::getField,
                fieldError -> resourceBundleMessageSource.getMessage(
                        fieldError.getDefaultMessage(), null, LocaleContextHolder.getLocale())));
    }

    @Autowired
    public void setResourceBundleMessageSource(ResourceBundleMessageSource resourceBundleMessageSource) {
        this.resourceBundleMessageSource = resourceBundleMessageSource;
    }
}
