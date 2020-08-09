package com.social.commerce.core.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Table
@Entity
public class TokenType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true, length = 100)
    @Enumerated(EnumType.STRING)
    private TokenTypes type;

    @OneToMany(mappedBy = "tokenType")
    private List<Token> tokens;
}
