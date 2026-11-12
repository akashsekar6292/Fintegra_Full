package com.example.website;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.example.website.repository.CustomerEnquiryRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class EnquiryApiIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private CustomerEnquiryRepository repository;

    @BeforeEach
    void clean() {
        repository.deleteAll();
    }

    @Test
    void createEnquiry_success() throws Exception {
        String body = """
                {
                  "fullName": "Rajesh Sharma",
                  "email": "rajesh@company.com",
                  "mobileNumber": "+91 98765 43210"
                }
                """;

        mockMvc.perform(post("/api/enquiries")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(body))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.success", is(true)))
                .andExpect(jsonPath("$.message", containsString("advisory specialist")));

        org.junit.jupiter.api.Assertions.assertEquals(1, repository.count());
    }

    @Test
    void createEnquiry_missingFields_returns400() throws Exception {
        String body = """
                {
                  "fullName": "",
                  "email": "not-an-email",
                  "mobileNumber": "123"
                }
                """;

        mockMvc.perform(post("/api/enquiries")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(body))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.success", is(false)));

        org.junit.jupiter.api.Assertions.assertEquals(0, repository.count());
    }

    @Test
    void createEnquiry_invalidJson_returns400() throws Exception {
        mockMvc.perform(post("/api/enquiries")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{"))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.success", is(false)));
    }

    @Test
    void createEnquiry_extraFieldsIgnored_massAssignmentSafe() throws Exception {
        String body = """
                {
                  "fullName": "Neha Kulkarni",
                  "email": "neha@example.com",
                  "mobileNumber": "9876543210",
                  "id": 999,
                  "createdAt": "2000-01-01T00:00:00Z",
                  "role": "admin"
                }
                """;

        mockMvc.perform(post("/api/enquiries")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(body))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.success", is(true)));

        var saved = repository.findAll().get(0);
        org.junit.jupiter.api.Assertions.assertNotEquals(999L, saved.getId());
        org.junit.jupiter.api.Assertions.assertNotEquals("admin", saved.getFullName());
    }
}
