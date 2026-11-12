package com.example.website.service;

import com.example.website.dto.EnquiryRequest;
import com.example.website.dto.EnquiryResponse;
import com.example.website.entity.CustomerEnquiry;
import com.example.website.repository.CustomerEnquiryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EnquiryService {

    private static final Logger log = LoggerFactory.getLogger(EnquiryService.class);

    private final CustomerEnquiryRepository repository;

    public EnquiryService(CustomerEnquiryRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public EnquiryResponse createEnquiry(EnquiryRequest request) {
        CustomerEnquiry enquiry = new CustomerEnquiry();
        enquiry.setFullName(request.getFullName().trim());
        enquiry.setEmail(request.getEmail().trim().toLowerCase());
        enquiry.setMobileNumber(normalizeMobile(request.getMobileNumber()));

        CustomerEnquiry saved = repository.save(enquiry);

        // Log without dumping PII (no email / phone / full name)
        log.info("Customer enquiry saved successfully id={}", saved.getId());

        return EnquiryResponse.ok(
                "Thank you! An advisory specialist has received your request and will contact you within 2 hours.");
    }

    private static String normalizeMobile(String raw) {
        return raw == null ? null : raw.trim().replaceAll("\\s+", " ");
    }
}
