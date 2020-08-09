package com.social.commerce.core.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Table
@Entity
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true, length = 100)
    private String value;

    @Column
    private LocalDateTime expirationDateTime;

    @ManyToOne
    @JoinColumn(name = "tokenTypeId")
    private TokenType tokenType;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;
}
