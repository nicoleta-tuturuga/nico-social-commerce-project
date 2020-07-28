package com.social.commerce.facade.converter;

import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

public interface Converter<S, T> {

    default Collection<T> convertAll(Collection<S> source) {
        return source.stream()
                .map(this::convert)
                .collect(Collectors.toCollection(ArrayList::new));
    }

    T convert(S source);
}
