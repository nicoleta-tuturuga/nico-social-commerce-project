package com.social.commerce.core.service.impl;

import com.social.commerce.core.dao.UserDAO;
import com.social.commerce.core.exception.UserNotFoundException;
import com.social.commerce.core.model.User;
import com.social.commerce.core.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserServiceImpl implements UserService {

    private static final String USER_NOT_FOUND_EXCEPTION_MESSAGE_FORMAT = "No user %s found!";
    private UserDAO userDAO;
    private PasswordEncoder passwordEncoder;

    @Override
    public User addUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setLastPasswordUpdate(LocalDateTime.now());

        //TODO add email verification
        user.setValidated(true);
        return userDAO.save(user);
    }

    @Override
    public User getUserByEmail(String email) {
        return userDAO.findUserByEmail(email).orElseThrow(() -> new UserNotFoundException(
                String.format(USER_NOT_FOUND_EXCEPTION_MESSAGE_FORMAT, email)));
    }

    @Autowired
    public void setUserDAO(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @Autowired
    public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }
}
