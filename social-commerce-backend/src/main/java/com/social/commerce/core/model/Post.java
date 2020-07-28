package com.social.commerce.core.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data
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
}
