# E-commerce API Scaffold (Node.js + Express + TypeScript)

This scaffold contains a minimal but comprehensive eCommerce API structure:
- Entities: Category, Subcategory (schema present), Product, User, Cart, Order, Payment, Address
- Database: PostgreSQL + Prisma ORM (see prisma/schema.prisma)
- Image uploads: AWS S3 presigned upload endpoint (src/utils/s3.ts)
- Swagger / OpenAPI at `/api-docs` (openapi.yaml)
- No Redis (per request)
- Basic auth endpoints (register/login) — returns a placeholder token. Replace with JWT in production.

How to use:
1. Copy `.env.example` to `.env` and fill in values.
2. `npm install`
3. `npx prisma generate`
4. `npx prisma migrate dev --name init` (ensure DATABASE_URL is reachable)
5. `npm run dev`
6. Open `http://localhost:4000/api-docs` for Swagger UI

Notes:
- This is scaffold code to get started — production hardening, proper auth (JWT), and more robust validation are required before real usage.