package com.example.website.dto;

public class EnquiryResponse {

    private final boolean success;
    private final String message;

    public EnquiryResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public static EnquiryResponse ok(String message) {
        return new EnquiryResponse(true, message);
    }

    public static EnquiryResponse fail(String message) {
        return new EnquiryResponse(false, message);
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }
}
