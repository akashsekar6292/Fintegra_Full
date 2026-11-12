package com.example.website.repository;

import com.example.website.entity.CustomerEnquiry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerEnquiryRepository extends JpaRepository<CustomerEnquiry, Long> {
}
