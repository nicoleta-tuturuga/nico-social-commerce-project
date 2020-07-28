package com.social.commerce.presentation.rest;

import com.social.commerce.facade.CategoryFacade;
import com.social.commerce.facade.dto.CategoryDto;
import com.social.commerce.facade.dto.ImageDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryFacade categoryFacade;

    @RequestMapping("/all")
    public List<CategoryDto> getAllCategories() {
        return categoryFacade.getAllCategories();
    }

    @RequestMapping("/{categoryCode}/dimensionsImage")
    public ImageDto getDimensionImageForCategory(@PathVariable("categoryCode") String categoryCode) {
        return categoryFacade.getDimensionImageForCategory(categoryCode);
    }
}