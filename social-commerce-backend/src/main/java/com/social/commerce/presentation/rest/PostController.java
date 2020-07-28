package com.social.commerce.presentation.rest;

import com.social.commerce.facade.PostFacade;
import com.social.commerce.facade.dto.PostDto;
import com.social.commerce.presentation.form.data.NewPostFormData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private PostFacade postFacade;

    @RequestMapping("/all")
    public List<PostDto> getAllCategories() {
        return postFacade.getAllPosts();
    }

    @PostMapping("/new")
    public PostDto createNewPost(@RequestBody NewPostFormData postFormData) {
        return postFacade.createNewPost(postFormData);
    }

}