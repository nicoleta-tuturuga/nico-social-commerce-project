package com.social.commerce.core.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"clientId", "token", "userId"}))
public class AuthenticationRefreshToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 100)
    private String token;

    @Column
    private LocalDateTime expirationDateTime;

    @ManyToOne
    @JoinColumn(name = "clientId")
    private AuthenticationClient authenticationClient;

    @OneToOne
    @JoinColumn(name = "userId")
    private User user;
}
