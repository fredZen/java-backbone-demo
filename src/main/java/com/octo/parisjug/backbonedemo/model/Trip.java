package com.octo.parisjug.backbonedemo.model;

public class Trip {
    private Resort resort;
    private Accommodation accommodation;

    public Resort getResort() {
        return resort;
    }

    public void setResort(final Resort resort) {
        this.resort = resort;
    }

    public Accommodation getAccommodation() {
        return accommodation;
    }

    public void setAccommodation(final Accommodation accommodation) {
        this.accommodation = accommodation;
    }
}
