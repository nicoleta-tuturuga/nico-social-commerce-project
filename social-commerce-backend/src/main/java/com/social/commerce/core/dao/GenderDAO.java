package com.social.commerce.core.dao;

import com.social.commerce.core.model.Gender;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenderDAO extends JpaRepository<Gender, Long> {

    Gender findByCode(String code);
}

