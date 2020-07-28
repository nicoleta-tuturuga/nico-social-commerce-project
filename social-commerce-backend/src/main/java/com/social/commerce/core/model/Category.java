package com.social.commerce.core.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Category {

    @Id
    @GeneratedValue
    private long id;
    private String code;
    private String label;

    @OneToOne
    private Media dimensionsImage;
    @ManyToMany
    private List<Dimension> dimensions;
}
