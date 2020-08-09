package com.social.commerce.facade;

import com.social.commerce.facade.dto.PostDto;
import com.social.commerce.presentation.form.data.NewPostFormData;

import java.util.List;

public interface PostFacade {

    List<PostDto> getAllPosts();

    PostDto createNewPost(NewPostFormData newPost);
}
