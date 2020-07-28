package com.social.commerce.core.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Feature {

    @Id
    @GeneratedValue
    private long id;

    @ManyToOne
    private Dimension dimension;

    @OneToOne
    private FeatureValue value;
}
