package com.social.commerce.core.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Comment {

    @Id
    @GeneratedValue
    private long id;

    private String text;

    @ManyToOne
    private User author;

    @OneToMany
    private List<Comment> replies;




}
