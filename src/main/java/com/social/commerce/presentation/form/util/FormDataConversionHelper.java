package com.social.commerce.presentation.form.util;

import com.social.commerce.presentation.rest.FileController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.ParseException;

@Component
public class FormDataConversionHelper {

    private static final Logger logger = LoggerFactory.getLogger(FileController.class);

    public double parseStringToDouble(String value) {
        return parseStringToNumber(value).doubleValue();
    }

    public long parseStringToLong(String value) {
        return parseStringToNumber(value).longValue();
    }

    private Number parseStringToNumber(String value) {
        DecimalFormat df = new DecimalFormat();
        DecimalFormatSymbols sfs = new DecimalFormatSymbols();
        sfs.setDecimalSeparator(',');
        df.setDecimalFormatSymbols(sfs);
        try {
            return df.parse(value);
        } catch (ParseException e) {
            String message = String.format("Cannot parse value: [%s] to number", value);
            logger.error(message);
            throw new IllegalArgumentException(message);
        }
    }

}
