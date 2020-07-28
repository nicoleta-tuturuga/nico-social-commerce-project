package com.social.commerce.core.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
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
