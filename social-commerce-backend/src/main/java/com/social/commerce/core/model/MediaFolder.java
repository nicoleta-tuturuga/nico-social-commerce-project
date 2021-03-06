package com.social.commerce.core.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class MediaFolder {

    @Id
    @GeneratedValue
    private long id;
    private String location;
}
