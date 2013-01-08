package com.octo.parisjug.backbonedemo.model;

import java.math.BigDecimal;

public class Accommodation {
    private String typeCode;
    private String description;
    private BigDecimal price;

    public String getTypeCode() {
        return typeCode;
    }

    public void setTypeCode(final String typeCode) {
        this.typeCode = typeCode;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(final String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(final BigDecimal price) {
        this.price = price;
    }
}
