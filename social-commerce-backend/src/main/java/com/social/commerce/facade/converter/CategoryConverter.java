package com.social.commerce.facade.converter;

import com.social.commerce.core.model.Category;
import com.social.commerce.facade.dto.CategoryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CategoryConverter implements Converter<Category, CategoryDto> {

    @Autowired
    private ImageConverter imageConverter;

    @Override
    public CategoryDto convert(Category source) {
        CategoryDto target = new CategoryDto();
        target.setValue(String.valueOf(source.getId()));
        target.setLabel(source.getLabel());
        target.setDimensionsImage(imageConverter.convert(source.getDimensionsImage()));
        target.setCode(source.getCode());

        return target;
    }
}
