package com.octo.parisjug.backbonedemo.exception;

public class UnknownResortException extends FunctionalException {
    public UnknownResortException(String resortCode) {
        super("Unknown resort code " + resortCode);
    }
}
