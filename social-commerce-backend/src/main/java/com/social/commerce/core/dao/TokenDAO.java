package com.social.commerce.core.dao;

import com.social.commerce.core.model.Token;
import com.social.commerce.core.model.TokenTypes;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface TokenDAO extends CrudRepository<Token, Long> {

    Optional<Token> findTokenByValueAndTokenTypeType(String value, TokenTypes tokenType);

    Optional<Token> findTokenByUserEmailAndTokenTypeType(String userEmail, TokenTypes tokenType);
}
