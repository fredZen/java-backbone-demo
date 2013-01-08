package com.octo.parisjug.backbonedemo.model;

public class BookingRequest {
    private String resortCode;
    private String accommodationCode;

    public String getResortCode() {
        return resortCode;
    }

    public void setResortCode(final String resortCode) {
        this.resortCode = resortCode;
    }

    public String getAccommodationCode() {
        return accommodationCode;
    }

    public void setAccommodationCode(final String accommodationCode) {
        this.accommodationCode = accommodationCode;
    }
}
