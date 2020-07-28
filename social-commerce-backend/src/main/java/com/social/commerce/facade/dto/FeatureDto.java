package com.social.commerce.facade.dto;

public class FeatureDto {

    private long id;
    private String dimensionName;
    private String dimensionCode;
    private FeatureValueDto value;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDimensionName() {
        return dimensionName;
    }

    public void setDimensionName(String dimensionName) {
        this.dimensionName = dimensionName;
    }

    public String getDimensionCode() {
        return dimensionCode;
    }

    public void setDimensionCode(String dimensionCode) {
        this.dimensionCode = dimensionCode;
    }

    public FeatureValueDto getValue() {
        return value;
    }

    public void setValue(FeatureValueDto value) {
        this.value = value;
    }
}
