package com.social.commerce.core.dao;

import com.social.commerce.core.model.TokenType;
import com.social.commerce.core.model.TokenTypes;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface TokenTypeDAO extends CrudRepository<TokenType, Long> {

    Optional<TokenType> findTokenTypeByType(TokenTypes tokenType);
}
