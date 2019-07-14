package com.social.commerce.core.service.impl;

import com.social.commerce.core.dao.CategoryDAO;
import com.social.commerce.core.model.Category;
import com.social.commerce.core.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DefaultCategoryService implements CategoryService {

    @Autowired
    private CategoryDAO categoryDAO;

    @Override
    public List<Category> getAllCategories() {
        return categoryDAO.findAll();
    }

    @Override
    public Category getCategoryByCode(String code) {
        return categoryDAO.findByCode(code);
    }
}
