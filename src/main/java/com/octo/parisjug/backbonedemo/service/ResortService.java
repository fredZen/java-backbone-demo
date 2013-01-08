package com.octo.parisjug.backbonedemo.service;

import com.octo.parisjug.backbonedemo.model.Resort;

import java.util.Collection;

public class ResortService {
    private final Collection<Resort> resorts;

    public ResortService(Collection<Resort> resorts) {
        this.resorts = resorts;
    }

    public Collection<Resort> getResorts() {
        return resorts;
    }
}
