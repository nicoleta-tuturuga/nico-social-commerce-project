package com.social.commerce.core.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Gender {

    @Id
    @GeneratedValue
    private long id;

    @Column(unique = true, length = 100)
    private String code;
    private String name;
}
