package com.social.commerce.core.service.impl;

import com.social.commerce.core.constants.AppConstants;
import com.social.commerce.core.service.EmailService;
import com.social.commerce.facade.dto.EmailSendRequest;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.nio.charset.StandardCharsets;

@Service
public class ThymeleafEmailServiceImpl implements EmailService {

    private static final Logger LOGGER = Logger.getLogger(ThymeleafEmailServiceImpl.class);
    private JavaMailSender javaMailSender;
    private SpringTemplateEngine templateEngine;

    @Override
    public void sendMessage(EmailSendRequest emailSendRequest) {
        Context context = new Context();
        context.setVariables(emailSendRequest.getVariables());
        try {
            sendHtmlMessage(emailSendRequest.getTo(), emailSendRequest.getSubject(),
                    templateEngine.process(emailSendRequest.getEmailTemplates().getTemplateName(), context));
        } catch (MessagingException e) {
            LOGGER.error(String.format("Couldn't send email %s to %s!", emailSendRequest.getSubject(), emailSendRequest.getTo()), e);
        }
    }

    private void sendHtmlMessage(String to, String subject, String htmlBody) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, StandardCharsets.UTF_8.name());
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(htmlBody, true);
        helper.addInline("footerLogo", new ClassPathResource(AppConstants.IMAGES_PATH + "footer.png"));
        javaMailSender.send(message);
    }

    @Autowired
    public void setJavaMailSender(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Autowired
    public void setTemplateEngine(SpringTemplateEngine templateEngine) {
        this.templateEngine = templateEngine;
    }
}
