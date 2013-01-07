package com.octo.parisjug.backbonedemo.model;

import java.math.BigDecimal;

public class Accommodation {
    public final String roomType;
    public final String description;
    public final BigDecimal price;

    public Accommodation(String roomType, String description, BigDecimal price) {
        this.roomType = roomType;
        this.description = description;
        this.price = price;
    }
}
