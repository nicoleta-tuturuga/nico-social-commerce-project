package com.social.commerce.core.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Currency {

    @Id
    @GeneratedValue
    private long id;

    private double code;
    private String symbol;
    private int digits;
}
