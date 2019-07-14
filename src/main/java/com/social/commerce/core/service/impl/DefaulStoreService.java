package com.social.commerce.core.service.impl;

import com.social.commerce.core.dao.CurrencyDAO;
import com.social.commerce.core.model.Currency;
import com.social.commerce.core.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DefaulStoreService implements StoreService {

    @Autowired
    private CurrencyDAO currencyDAO;

    //TODO: Change this
    @Override
    public Currency getCurrentCurrency() {
        return currencyDAO.findByCode("RON");
    }
}
