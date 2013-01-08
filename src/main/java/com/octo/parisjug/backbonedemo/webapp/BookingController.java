package com.octo.parisjug.backbonedemo.webapp;

import com.octo.parisjug.backbonedemo.model.BookingRequest;
import com.octo.parisjug.backbonedemo.model.BookingResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.UUID;

@Controller
@RequestMapping("/booking")
public class BookingController {
    @ResponseBody
    @RequestMapping(method = RequestMethod.POST)
    public BookingRequest book(@RequestBody BookingRequest request) {
        request.setFileId(UUID.randomUUID());
        return request;
    }
}
