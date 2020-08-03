package com.social.commerce.core.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table
public class AuthenticationClient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true, length = 100)
    private String clientId;

    @Column
    private String secret;

    @OneToMany(mappedBy = "authenticationClient")
    private List<AuthenticationRefreshToken> refreshTokens;
}
