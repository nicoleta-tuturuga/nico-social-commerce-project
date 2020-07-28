package com.social.commerce.core.dao;

import com.social.commerce.core.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CategoryDAO extends JpaRepository<Category, Long> {

    Category findByCode(String code);

    // TODO: this is just an example
    @Query("SELECT c FROM Category c WHERE LOWER(c.code) = LOWER(:code)")
    Category retrieveByCode(@Param("code") String code);

}

