package com.octo.parisjug.backbonedemo.webapp;

import com.octo.parisjug.backbonedemo.exception.UnknownResortException;
import com.octo.parisjug.backbonedemo.model.Accommodation;
import com.octo.parisjug.backbonedemo.service.AccommodationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Collection;

@Controller
@RequestMapping("/accommodation")
public class AccommodationController {
    @Autowired
    private AccommodationService accommodationService;

    @ResponseBody
    @RequestMapping(value = "/forResort/{resortCode}", method = RequestMethod.GET)
    public Collection<Accommodation> accommodationsAvailableForResort(@PathVariable("resortCode") String resortCode) throws UnknownResortException {
        return accommodationService.accommodationsForResort(resortCode);
    }
}
