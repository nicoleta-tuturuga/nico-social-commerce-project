package com.social.commerce;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.AcceptHeaderLocaleResolver;
import org.springframework.web.servlet.resource.PathResourceResolver;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Locale;

@Configuration
@EnableWebMvc
@ConfigurationProperties(prefix = "app")
public class StaticResourceConfiguration extends AcceptHeaderLocaleResolver implements WebMvcConfigurer {

    private List<Locale> enabledLocales;

    //TODO: add to path all media folders
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler("/images/**")
                .addResourceLocations("file:///C:/react/socialCommerceBE/medias/images/", "classpath:/static/images/", "classpath:/static/")
                .setCachePeriod(3600)
                .resourceChain(true)
                .addResolver(new PathResourceResolver());
    }

    @Override
    public Locale resolveLocale(HttpServletRequest request) {
        String acceptHeaderLanguageValue = request.getHeader("Accept-Language");
        if (StringUtils.isEmpty(acceptHeaderLanguageValue)) {
            return Locale.getDefault();
        }

        return Locale.lookup(Locale.LanguageRange.parse(acceptHeaderLanguageValue),
                enabledLocales);
    }

    @Bean
    public ResourceBundleMessageSource messageSource() {
        ResourceBundleMessageSource resourceBundleMessageSource = new ResourceBundleMessageSource();
        resourceBundleMessageSource.setBasename("messages");
        resourceBundleMessageSource.setDefaultEncoding("UTF-8");
        resourceBundleMessageSource.setUseCodeAsDefaultMessage(true);

        return resourceBundleMessageSource;
    }

    public void setEnabledLocales(List<Locale> enabledLocales) {
        this.enabledLocales = enabledLocales;
    }
}