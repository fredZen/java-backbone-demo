package com.octo.parisjug.backbonedemo.exception;

public class FunctionalException extends Exception{
    public FunctionalException(final String message) {
        super(message);
    }

    public FunctionalException(final String message, final Throwable cause) {
        super(message, cause);
    }
}
