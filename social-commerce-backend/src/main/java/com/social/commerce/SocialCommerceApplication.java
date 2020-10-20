package com.social.commerce;

import com.social.commerce.config.StaticResourceConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.social.commerce.core.dao")
@EnableConfigurationProperties({
        FileStorageProperties.class,
        StaticResourceConfiguration.class
})
public class SocialCommerceApplication {

    public static void main(String[] args) {
        SpringApplication.run(SocialCommerceApplication.class, args);
    }
}
