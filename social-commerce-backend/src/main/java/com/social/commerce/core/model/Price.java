package com.social.commerce.core.model;

import lombok.Data;

import javax.persistence.*;


@Data
@Entity
public class Price {

    @Id
    @GeneratedValue
    private long id;

    private double value;

    //TODO discuss this
    @OneToOne
    @JoinColumn(name = "currencyId")
    private Currency currency;
}
