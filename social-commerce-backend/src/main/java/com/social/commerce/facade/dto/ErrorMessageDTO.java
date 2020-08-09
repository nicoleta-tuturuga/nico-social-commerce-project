package com.social.commerce.facade.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class ErrorMessageDTO {
    private String error;
    private String errorDescription;

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("{\n");
        sb.append("\t\"error\":").append("\"").append(error).append("\"\n");
        sb.append("\t\"errorDescription\":").append("\"").append(errorDescription).append("\"\n");
        sb.append('}');
        return sb.toString();
    }
}
