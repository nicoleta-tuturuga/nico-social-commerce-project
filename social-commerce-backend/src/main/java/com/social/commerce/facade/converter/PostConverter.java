package com.social.commerce.facade.converter;

import com.social.commerce.core.model.Post;
import com.social.commerce.facade.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PostConverter implements Converter<Post, PostDto> {

    @Autowired
    private ImageConverter imageConverter;


    @Override
    public PostDto convert(Post source) {

        PostDto target = new PostDto();
        target.setDescription(source.getDescription());


        return target;
    }
}
