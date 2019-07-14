package com.social.commerce.facade.dto;

public class CategoryDto {
    private String value;
    private String label;
    private String code;
    private ImageDto dimensionsImage;

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public ImageDto getDimensionsImage() {
        return dimensionsImage;
    }

    public void setDimensionsImage(ImageDto dimensionsImage) {
        this.dimensionsImage = dimensionsImage;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
