package com.octo.parisjug.backbonedemo.model;

import java.util.UUID;

public class BookingRequest {
    private String resortCode;
    private String accommodationCode;
    private UUID fileId;

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

    public UUID getFileId() {
        return fileId;
    }

    public void setFileId(final UUID fileId) {
        this.fileId = fileId;
    }
}
