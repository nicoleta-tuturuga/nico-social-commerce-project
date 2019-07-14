package com.social.commerce.core.service.impl;

import com.social.commerce.core.dao.PriceDAO;
import com.social.commerce.core.model.Price;
import com.social.commerce.core.service.PriceService;
import com.social.commerce.core.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DefaultPriceService implements PriceService {

    @Autowired
    private StoreService storeService;
    @Autowired
    private PriceDAO priceDAO;

    @Override
    public Price createPrice(double value) {
        Price price = new Price();
        price.setValue(value);
        price.setCurrency(storeService.getCurrentCurrency());
        return priceDAO.save(price);
    }
}
