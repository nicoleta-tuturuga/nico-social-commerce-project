package com.social.commerce.facade.converter;

import com.social.commerce.facade.dto.ImageDto;
import com.social.commerce.core.model.Media;
import org.springframework.stereotype.Component;

@Component
public class ImageConverter implements Converter<Media, ImageDto> {
    @Override
    public ImageDto convert(Media source) {
        ImageDto target = new ImageDto();
        target.setFileName(source.getFileName());
        target.setUrl(source.getFolder().getLocation() + "/" + source.getFileName());

        return target;
    }
}
