package com.social.commerce.core.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Data
@Entity
public class Media {

    @Id
    @GeneratedValue
    private long id;
    private String fileName;

    @ManyToOne
    private MediaFolder folder;
}
