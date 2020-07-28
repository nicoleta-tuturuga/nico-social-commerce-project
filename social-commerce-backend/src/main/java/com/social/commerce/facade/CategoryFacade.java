package com.social.commerce.facade;

import com.social.commerce.facade.dto.CategoryDto;
import com.social.commerce.facade.dto.ImageDto;

import java.util.List;

public interface CategoryFacade {
    List<CategoryDto> getAllCategories();
    ImageDto getDimensionImageForCategory(String categoryCode);
}
