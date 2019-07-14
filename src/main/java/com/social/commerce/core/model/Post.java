package com.social.commerce.core.model;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class Post {

    @Id
    @GeneratedValue
    private long id;
    private long quantity;
    private String description;

    @OneToMany
    private Set<User> likes;

    @OneToMany
    private List<Comment> comments;

    @ManyToOne
    private User author;

    @OneToMany
    private List<Media> images;

    @OneToOne
    private Price price;

    @ManyToOne
    private Gender forGender;

    @OneToMany
    private List<Feature> dimensions;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<User> getLikes() {
        return likes;
    }

    public void setLikes(Set<User> likes) {
        this.likes = likes;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public List<Media> getImages() {
        return images;
    }

    public void setImages(List<Media> images) {
        this.images = images;
    }

    public Price getPrice() {
        return price;
    }

    public void setPrice(Price price) {
        this.price = price;
    }

    public Gender getForGender() {
        return forGender;
    }

    public void setForGender(Gender forGender) {
        this.forGender = forGender;
    }

    public List<Feature> getDimensions() {
        return dimensions;
    }

    public void setDimensions(List<Feature> dimensions) {
        this.dimensions = dimensions;
    }
}
