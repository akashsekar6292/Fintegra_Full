package com.example.website.controller;

import com.example.website.dto.EnquiryRequest;
import com.example.website.dto.EnquiryResponse;
import com.example.website.service.EnquiryService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/enquiries")
public class EnquiryController {

    private final EnquiryService enquiryService;

    public EnquiryController(EnquiryService enquiryService) {
        this.enquiryService = enquiryService;
    }

    @PostMapping
    public ResponseEntity<EnquiryResponse> createEnquiry(@Valid @RequestBody EnquiryRequest request) {
        EnquiryResponse response = enquiryService.createEnquiry(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
