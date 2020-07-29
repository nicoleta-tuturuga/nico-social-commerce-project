package com.social.commerce.core.service.impl;

import com.social.commerce.core.dao.UserDAO;
import com.social.commerce.core.model.User;
import com.social.commerce.core.model.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class UserDetailsServiceImpl implements UserDetailsService {

    private static final String NO_USER_FOUND_EXCEPTION = "No user with username %s found!";
    private UserDAO userDAO;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return new UserPrincipal(userDAO.findUserByEmail(s).orElseThrow(() -> new UsernameNotFoundException(
                String.format(NO_USER_FOUND_EXCEPTION, s))));
    }

    @Autowired
    public void setUserDAO(UserDAO userDAO) {
        this.userDAO = userDAO;
    }
}
