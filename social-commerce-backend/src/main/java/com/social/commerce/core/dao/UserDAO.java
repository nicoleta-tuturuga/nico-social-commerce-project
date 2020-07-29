package com.social.commerce.core.dao;

import com.social.commerce.core.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserDAO extends CrudRepository<User, Long> {

    Optional<User> findUserByEmail(String email);
}
