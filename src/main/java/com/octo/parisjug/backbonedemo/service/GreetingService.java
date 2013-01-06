package com.octo.parisjug.backbonedemo.service;

import com.octo.parisjug.backbonedemo.model.Greeting;
import org.springframework.stereotype.Service;

@Service
public class GreetingService {
    public Greeting getGreeting() {
        return new Greeting();
    }
}
