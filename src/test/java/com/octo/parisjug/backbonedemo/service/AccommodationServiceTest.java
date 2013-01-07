package com.octo.parisjug.backbonedemo.service;

import com.octo.parisjug.backbonedemo.exception.UnknownResortException;
import com.octo.parisjug.backbonedemo.model.Accommodation;

import static org.fest.assertions.Assertions.*;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

public class AccommodationServiceTest {

    @Test
    public void roomsForResort_retrieves_options() throws UnknownResortException {
        final HashMap<String, List<Accommodation>> optionsForTUN = optionsForTUN();
        final AccommodationService accommodationService = new AccommodationService(optionsForTUN);

        final Collection<Accommodation> accommodations = accommodationService.accommodationsForResort("TUN");

        assertThat(accommodations).isEqualTo(optionsForTUN.get("TUN"));
    }

    private HashMap<String, List<Accommodation>> optionsForTUN() {
        final HashMap<String, List<Accommodation>> optionsByCodeSejour = new HashMap<>();
        final List<Accommodation> accommodations = new ArrayList<>();
        optionsByCodeSejour.put("TUN", accommodations);
        return optionsByCodeSejour;
    }

    @Test
    public void roomsForResort_with_an_unknown_destination_results_in_an_exception() {
        final AccommodationService accommodationService = new AccommodationService(new HashMap<String, List<Accommodation>>());

        Exception exception = null;
        try {
            accommodationService.accommodationsForResort("XXX");
        } catch (UnknownResortException e) {
            exception = e;
        }

        assertThat(exception).isNotNull();
    }
}
