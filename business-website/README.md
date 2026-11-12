# Fintegra Business Website

Ready-to-run marketing site for **Fintegra Tax Consultancy**: React + Vite frontend and Spring Boot enquiry API with MySQL.

> Not published / not hosted. Run it on your machine and set your own DB credentials.

## Quick start (you configure DB)

### 1. MySQL

```bash
mysql -u root -p < database/schema.sql
```

Create a user (use **your** username and password):

```sql
CREATE USER IF NOT EXISTS 'YOUR_USER'@'%' IDENTIFIED BY 'YOUR_PASSWORD';
GRANT ALL PRIVILEGES ON business_website.* TO 'YOUR_USER'@'%';
FLUSH PRIVILEGES;
```

### 2. Backend

```bash
cd backend

export DB_URL='jdbc:mysql://localhost:3306/business_website?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC'
export DB_USERNAME='YOUR_USER'
export DB_PASSWORD='YOUR_PASSWORD'
export CORS_ALLOWED_ORIGINS='http://localhost:3847,http://127.0.0.1:3847'
export JPA_DDL_AUTO='validate'
export SERVER_PORT=8088

mvn spring-boot:run
```

See `backend/env.example` for the full variable list.  
DB settings load from `src/main/resources/application-db.properties` and are overridden by these env vars — never put production secrets in the repo.

API: `POST http://localhost:8088/api/enquiries`  
Body: `{ "fullName", "email", "mobileNumber" }` → `{ "success", "message" }`

### 3. Frontend

```bash
cd frontend
cp .env.example .env   # VITE_API_BASE_URL=http://localhost:8088
npm install
npm run dev            # http://localhost:3847
```

Open the site, scroll to the enquiry form, submit a lead — it saves to `business_website.customer_enquiries` when the backend + MySQL are up.

## Structure

```
business-website/
  frontend/          # React + Vite + Tailwind CSS
  backend/           # Spring Boot 3.3 (Java 17) REST API
  database/schema.sql
  README.md
```

## Prerequisites

- Node.js 20+
- Java 17+ (Java 21+ runtimes OK; source targets 17)
- Maven 3.8+
- MySQL 8+

## Tests

```bash
cd backend && mvn test          # H2 in-memory (no MySQL needed)
cd frontend && npm test && npm run build
```

## Optional: demo API without MySQL

```bash
cd backend
SPRING_PROFILES_ACTIVE=dev SERVER_PORT=8088 \
  CORS_ALLOWED_ORIGINS='http://localhost:3847,http://127.0.0.1:3847' \
  mvn spring-boot:run
```

Uses H2 only for local UI/API smoke tests. Prefer MySQL for real use.

## Production notes (when you deploy yourself)

- Terminate TLS at your reverse proxy; set `CORS_ALLOWED_ORIGINS` to your real frontend origin(s).
- Inject `DB_URL`, `DB_USERNAME`, `DB_PASSWORD` from your host/secrets — never commit them.
- Consider rate limiting / CAPTCHA in front of `POST /api/enquiries`.
- Logs record enquiry IDs only (no email/phone/name dumps).
