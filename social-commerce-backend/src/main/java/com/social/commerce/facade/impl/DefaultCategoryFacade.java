package com.social.commerce.facade.impl;

import com.social.commerce.core.model.Category;
import com.social.commerce.core.service.CategoryService;
import com.social.commerce.facade.CategoryFacade;
import com.social.commerce.facade.converter.CategoryConverter;
import com.social.commerce.facade.converter.ImageConverter;
import com.social.commerce.facade.dto.CategoryDto;
import com.social.commerce.facade.dto.ImageDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DefaultCategoryFacade implements CategoryFacade {

    @Autowired
    private ImageConverter imageConverter;

    @Autowired
    private CategoryConverter categoryConverter;

    @Autowired
    private CategoryService categoryService;

    @Override
    public List<CategoryDto> getAllCategories() {
        return new ArrayList<>(categoryConverter.convertAll(categoryService.getAllCategories()));
    }

    @Override
    public ImageDto getDimensionImageForCategory(String categoryCode) {
        Category category = categoryService.getCategoryByCode(categoryCode);
        return imageConverter.convert(category.getDimensionsImage());
    }
}
