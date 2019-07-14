package com.social.commerce.core.dao;

import com.social.commerce.core.model.Currency;
import com.social.commerce.core.model.Gender;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyDAO extends JpaRepository<Currency, Long> {

    Currency findByCode(String code);
}

