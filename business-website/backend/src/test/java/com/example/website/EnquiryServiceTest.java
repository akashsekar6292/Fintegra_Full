package com.example.website;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.example.website.dto.EnquiryRequest;
import com.example.website.dto.EnquiryResponse;
import com.example.website.entity.CustomerEnquiry;
import com.example.website.repository.CustomerEnquiryRepository;
import com.example.website.service.EnquiryService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class EnquiryServiceTest {

    @Mock
    private CustomerEnquiryRepository repository;

    @InjectMocks
    private EnquiryService enquiryService;

    @Test
    void createEnquiry_normalizesAndPersists() {
        EnquiryRequest request = new EnquiryRequest();
        request.setFullName("  Vikram Malhotra  ");
        request.setEmail("  Vikram@Apex.com ");
        request.setMobileNumber("  +91 98765 43210  ");

        CustomerEnquiry persisted = new CustomerEnquiry();
        persisted.setId(42L);
        when(repository.save(any(CustomerEnquiry.class))).thenReturn(persisted);

        EnquiryResponse response = enquiryService.createEnquiry(request);

        assertTrue(response.isSuccess());
        ArgumentCaptor<CustomerEnquiry> captor = ArgumentCaptor.forClass(CustomerEnquiry.class);
        verify(repository).save(captor.capture());
        CustomerEnquiry saved = captor.getValue();
        assertEquals("Vikram Malhotra", saved.getFullName());
        assertEquals("vikram@apex.com", saved.getEmail());
        assertEquals("+91 98765 43210", saved.getMobileNumber());
    }
}
