package com.social.commerce.core.model;

import javax.persistence.*;

@Entity
public class Feature {

    @Id
    @GeneratedValue
    private long id;

    @ManyToOne
    private Dimension dimension;

    @OneToOne
    private FeatureValue value;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Dimension getDimension() {
        return dimension;
    }

    public void setDimension(Dimension dimension) {
        this.dimension = dimension;
    }

    public FeatureValue getValue() {
        return value;
    }

    public void setValue(FeatureValue value) {
        this.value = value;
    }
}
