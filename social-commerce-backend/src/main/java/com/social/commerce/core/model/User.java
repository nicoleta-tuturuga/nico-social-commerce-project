package com.social.commerce.core.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue
    private long id;

    @Column
    private String email;

    @Column
    private String name;

    @Column
    private String password;

    @Column
    private boolean validated;

    @Column
    private LocalDateTime lastPasswordUpdate;
}
