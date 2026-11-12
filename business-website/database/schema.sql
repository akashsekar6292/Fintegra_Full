-- Fintegra business website — MySQL schema
-- Database: business_website
-- Table: customer_enquiries

CREATE DATABASE IF NOT EXISTS business_website
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE business_website;

CREATE TABLE IF NOT EXISTS customer_enquiries (
    id            BIGINT       NOT NULL AUTO_INCREMENT,
    full_name     VARCHAR(100) NOT NULL,
    email         VARCHAR(255) NOT NULL,
    mobile_number VARCHAR(20)  NOT NULL,
    created_at    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_customer_enquiries_email (email),
    INDEX idx_customer_enquiries_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
