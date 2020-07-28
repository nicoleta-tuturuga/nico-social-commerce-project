package com.social.commerce.facade.dto;

import com.social.commerce.core.model.User;

import javax.persistence.OneToMany;
import java.util.List;

public class CommentDto {


    private long id;

    private String text;
    private User author;

    @OneToMany
    private List<CommentDto> replies;
}
