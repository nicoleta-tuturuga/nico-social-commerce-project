package com.social.commerce.facade.impl;

import com.social.commerce.core.model.Post;
import com.social.commerce.core.model.Price;
import com.social.commerce.core.service.PriceService;
import com.social.commerce.facade.PostFacade;
import com.social.commerce.facade.converter.PostConverter;
import com.social.commerce.facade.converter.ReversePostConverter;
import com.social.commerce.facade.dto.PostDto;
import com.social.commerce.presentation.form.data.NewPostFormData;
import com.social.commerce.presentation.form.util.FormDataConversionHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DefaultPostFacade implements PostFacade {

    @Autowired
    private PriceService priceService;
    @Autowired
    private FormDataConversionHelper formDataConversionHelper;
    @Autowired
    private ReversePostConverter reversePostConverter;
    @Autowired
    private PostConverter postConverter;

    @Override
    public List<PostDto> getAllPosts() {
        return null;
    }

    @Override
    public PostDto createNewPost(NewPostFormData newPost) {

        Post post = reversePostConverter.convert(newPost);


        Price price = priceService.createPrice(formDataConversionHelper.parseStringToDouble(newPost.getPrice()));
        post.setPrice(price);

        return postConverter.convert(post);
    }
}
