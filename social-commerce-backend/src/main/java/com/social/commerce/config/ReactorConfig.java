package com.social.commerce.config;

import com.social.commerce.facade.dto.EmailSendRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import reactor.core.publisher.EmitterProcessor;
import reactor.core.publisher.FluxSink;

@Configuration
public class ReactorConfig {

    @Bean
    public EmitterProcessor<EmailSendRequest> emailSendRequestEmitterProcessor() {
        return EmitterProcessor.create();
    }

    @Bean
    public FluxSink<EmailSendRequest> emailSendRequestFluxSink(EmitterProcessor<EmailSendRequest> emailSendRequestEmitterProcessor) {
        return emailSendRequestEmitterProcessor.sink();
    }
}
