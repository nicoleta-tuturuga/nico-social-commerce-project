package com.social.commerce.presentation.rest;

import com.social.commerce.core.exception.MockInternationalizedException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mock")
public class MockRestController {

    @GetMapping
    public String  throwMockException() {
        throw new MockInternationalizedException(new Object[]{"first argument"});
    }

    @GetMapping("noargs")
    public String  throwMockExceptionWithoutParams() {
        throw new MockInternationalizedException(new Object[]{});
    }
}
