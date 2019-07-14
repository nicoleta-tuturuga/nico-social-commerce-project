package com.social.commerce.core.service;

import com.social.commerce.core.model.Category;

import java.util.List;

public interface CategoryService {
    List<Category> getAllCategories();

    Category getCategoryByCode(String code);

}
