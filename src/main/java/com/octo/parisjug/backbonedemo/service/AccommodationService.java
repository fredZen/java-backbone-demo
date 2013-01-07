package com.octo.parisjug.backbonedemo.service;

import com.octo.parisjug.backbonedemo.exception.UnknownResortException;
import com.octo.parisjug.backbonedemo.model.Accommodation;

import java.util.Collection;
import java.util.Map;

public class AccommodationService {
    private final Map<String, ? extends Collection<Accommodation>> accommodationsByResortCode;

    public AccommodationService(final Map<String, ? extends Collection<Accommodation>> accommodationsByResortCode) {
        this.accommodationsByResortCode = accommodationsByResortCode;
    }

    public Collection<Accommodation> accommodationsForResort(String resortCode) throws UnknownResortException {
        final Collection<Accommodation> accommodations = accommodationsByResortCode.get(resortCode);
        if(accommodations == null) {
            throw new UnknownResortException(resortCode);
        }
        return accommodations;
    }
}
