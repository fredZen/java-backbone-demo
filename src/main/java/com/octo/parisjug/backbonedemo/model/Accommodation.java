package com.octo.parisjug.backbonedemo.model;

import java.math.BigDecimal;

public class Accommodation {
    public final String typeCode;
    public final String description;
    public final BigDecimal price;

    public Accommodation(String typeCode, String description, BigDecimal price) {
        this.typeCode = typeCode;
        this.description = description;
        this.price = price;
    }
}
