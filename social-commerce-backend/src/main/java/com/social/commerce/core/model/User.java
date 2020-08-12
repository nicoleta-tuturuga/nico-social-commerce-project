package com.social.commerce.core.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

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

    @Column
    private String phoneNumber;

    @ManyToMany
    @JoinTable(name = "user_role", joinColumns = {@JoinColumn(name = "userId")},
            inverseJoinColumns = {@JoinColumn(name = "roleId")})
    private List<Role> roles;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Token> tokens;
}
