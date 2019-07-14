package com.social.commerce.core.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Dimension {

    @Id
    @GeneratedValue
    private long id;

    @Column(unique = true)
    private String code;

    private String unitOfMeasure;


}
