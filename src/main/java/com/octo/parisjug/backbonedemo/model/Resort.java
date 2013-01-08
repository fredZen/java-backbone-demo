package com.octo.parisjug.backbonedemo.model;

public class Resort {
    public final String id;
    public final String name;
    public final String country;
    public final String description;

    /*
     * Each resort has a color theme. In this toy example, we'll just store it as a CSS color string.
     * Probably not the best idea in real life.
     */
    public final String color;

    public Resort(String id, final String name, final String country, String description, String color) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.description = description;
        this.color = color;
    }
}
