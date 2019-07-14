package com.social.commerce.core.model;

import javax.persistence.*;
import java.util.List;

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

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public List<Dimension> getDimensions() {
        return dimensions;
    }

    public void setDimensions(List<Dimension> dimensions) {
        this.dimensions = dimensions;
    }

    public Media getDimensionsImage() {
        return dimensionsImage;
    }

    public void setDimensionsImage(Media dimensionsImage) {
        this.dimensionsImage = dimensionsImage;
    }
}
