package com.social.commerce.core.service.impl;

import com.social.commerce.core.service.EmailService;
import com.social.commerce.facade.dto.EmailSendRequest;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import reactor.core.publisher.EmitterProcessor;
import reactor.core.publisher.FluxSink;
import reactor.core.scheduler.Schedulers;

import javax.annotation.PostConstruct;
import java.util.Objects;

@Service
public class ReactiveEmailService implements EmailService {

    private static final Logger LOGGER = Logger.getLogger(ReactiveEmailService.class);
    private EmitterProcessor<EmailSendRequest> emailSendRequestEmitterProcessor;
    private FluxSink<EmailSendRequest> emailSendRequestFluxSink;
    private EmailService emailService;

    @Autowired
    public ReactiveEmailService(EmitterProcessor<EmailSendRequest> emailSendRequestEmitterProcessor,
                                FluxSink<EmailSendRequest> emailSendRequestFluxSink,
                                @Qualifier("thymeleafEmailServiceImpl") EmailService emailService) {
        this.emailSendRequestEmitterProcessor = emailSendRequestEmitterProcessor;
        this.emailSendRequestFluxSink = emailSendRequestFluxSink;
        this.emailService = emailService;
    }

    @PostConstruct
    private void subscribe() {
        emailSendRequestEmitterProcessor
                .filter(Objects::nonNull)
                .publishOn(Schedulers.parallel())
                .parallel().runOn(Schedulers.parallel())
                .subscribe(emailService::sendMessage);
        LOGGER.info("thymeleafEmailServiceImpl bean registered as subscriber for emailSendRequestEmitterProcessor bean");
    }

    @Override
    public void sendMessage(EmailSendRequest emailSendRequest) {
        emailSendRequestFluxSink.next(emailSendRequest);
    }
}
