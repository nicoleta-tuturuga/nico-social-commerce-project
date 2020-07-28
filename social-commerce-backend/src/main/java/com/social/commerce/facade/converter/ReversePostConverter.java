package com.social.commerce.facade.converter;

import com.social.commerce.core.model.Post;
import com.social.commerce.core.model.Price;
import com.social.commerce.core.service.GenderService;
import com.social.commerce.presentation.form.data.NewPostFormData;
import com.social.commerce.presentation.form.util.FormDataConversionHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReversePostConverter implements Converter<NewPostFormData, Post> {

    @Autowired
    private ImageConverter imageConverter;

    @Autowired
    private FormDataConversionHelper formDataConversionHelper;

    @Autowired
    GenderService genderService;

    @Override
    public Post convert(NewPostFormData source) {

        Post target = new Post();
        target.setDescription(source.getDescription());
        target.setForGender(genderService.getGenderByCode(source.getGender()));
        target.setQuantity(formDataConversionHelper.parseStringToLong(source.getQuantity()));




        return target;
    }
}
