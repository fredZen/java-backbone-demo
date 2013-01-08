package com.octo.parisjug.backbonedemo.webapp;

import com.octo.parisjug.backbonedemo.model.Resort;
import com.octo.parisjug.backbonedemo.service.ResortService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Collection;

@Controller
@RequestMapping("/resort")
public class ResortController {
    @Autowired
    private ResortService resortService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET)
    public Collection<Resort> availableResorts()  {
        return resortService.getResorts();
    }
}
