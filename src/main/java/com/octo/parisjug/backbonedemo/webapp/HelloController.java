package com.octo.parisjug.backbonedemo.webapp;

import com.octo.parisjug.backbonedemo.model.Greeting;
import com.octo.parisjug.backbonedemo.service.GreetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/greet")
public class HelloController {
    @Autowired
    private GreetingService greetingService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET)
    public Greeting greet() {
        return greetingService.getGreeting();
    }
}
