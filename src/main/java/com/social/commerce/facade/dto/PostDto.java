package com.social.commerce.facade.dto;

import com.social.commerce.core.model.User;

import java.util.List;
import java.util.Set;

public class PostDto {

    private long id;

    private Set<UserDto> likes;

    private List<CommentDto> comments;

    private User author;

    private String description;

    private List<String> images;

    private List<FeatureDto> dimensions;

    private long quantity;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Set<UserDto> getLikes() {
        return likes;
    }

    public void setLikes(Set<UserDto> likes) {
        this.likes = likes;
    }

    public List<CommentDto> getComments() {
        return comments;
    }

    public void setComments(List<CommentDto> comments) {
        this.comments = comments;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public List<FeatureDto> getDimensions() {
        return dimensions;
    }

    public void setDimensions(List<FeatureDto> dimensions) {
        this.dimensions = dimensions;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }
}
