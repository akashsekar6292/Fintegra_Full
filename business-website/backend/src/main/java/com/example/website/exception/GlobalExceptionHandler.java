package com.example.website.exception;

import com.example.website.dto.EnquiryResponse;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<EnquiryResponse> handleValidation(MethodArgumentNotValidException ex) {
        String message = ex.getBindingResult().getFieldErrors().stream()
                .map(FieldError::getDefaultMessage)
                .collect(Collectors.joining("; "));
        if (message.isBlank()) {
            message = "Validation failed";
        }
        log.warn("Enquiry validation failed fieldCount={}", ex.getBindingResult().getFieldErrorCount());
        return ResponseEntity.badRequest().body(EnquiryResponse.fail(message));
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<EnquiryResponse> handleUnreadable(HttpMessageNotReadableException ex) {
        log.warn("Unreadable enquiry request body");
        return ResponseEntity.badRequest()
                .body(EnquiryResponse.fail("Request body must be valid JSON with fullName, email, and mobileNumber."));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<EnquiryResponse> handleGeneric(Exception ex) {
        log.error("Unexpected error while processing enquiry", ex);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(EnquiryResponse.fail("Unable to save your enquiry right now. Please try again shortly."));
    }
}
