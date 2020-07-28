package com.social.commerce.presentation.form.data;

import org.springframework.web.multipart.MultipartFile;

public class NewPostFormData {

    private String description;
    private String Category;
    private String price;
    private String quantity;
    private String gender;
    private MultipartFile[] file;
    private DimensionFormData[] dimensions;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return Category;
    }

    public void setCategory(String category) {
        Category = category;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public MultipartFile[] getFile() {
        return file;
    }

    public void setFile(MultipartFile[] file) {
        this.file = file;
    }

    public DimensionFormData[] getDimensions() {
        return dimensions;
    }

    public void setDimensions(DimensionFormData[] dimensions) {
        this.dimensions = dimensions;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
