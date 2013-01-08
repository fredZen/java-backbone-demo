package com.octo.parisjug.backbonedemo.model;

import java.math.BigDecimal;

public class Resort {
    private String id;
    private String name;
    private String country;
    private String description;
    private BigDecimal price;

    /*
     * Each resort has a color theme. In this toy example, we'll just store it as a CSS color string.
     * Probably not the best idea in real life.
     */
    private String color;

    public String getId() {
        return id;
    }

    public void setId(final String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(final String country) {
        this.country = country;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(final String description) {
        this.description = description;
    }

    public String getColor() {
        return color;
    }

    public void setColor(final String color) {
        this.color = color;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(final BigDecimal price) {
        this.price = price;
    }
}
