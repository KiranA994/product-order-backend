# Product Backend API

This is the backend API for the Product application, built with **Node.js**, **Express**, **MongoDB (via Mongoose)** and **CORS** enabled. It exposes RESTful endpoints for managing users, products, and orders, and is intended to be consumed by an Angular frontend.

---

## Features

- **User management** via `/api/users`
- **Product management** via `/api/products`
- **Order management** via `/api`
- **MongoDB integration** using Mongoose (see `db/mongoosedb`)
- **Environment-based configuration** via `.env`
- **CORS enabled** for frontend consumption
- **Health check** root route at `/`

---

## Project Structure (backend)

```text
backend/
  index.js              # Express app entry point
  db/
    connection.js       # DB connection logic (e.g., relational/other)
    mongoosedb.js       # MongoDB/Mongoose connection
  routes/
    router.js           # User-related routes (/api/users)
    productRouter.js    # Product-related routes (/api/products)
    orderRouter.js      # Order-related routes (/api)
  .env                  # Environment variables (not committed)
  package.json
  ...
```

> Note: Actual file names and structure may vary slightly; update this section to match your project.

---

## Requirements

- **Node.js** (LTS recommended, e.g. 18+)
- **npm** or **yarn**
- **MongoDB** instance (local or remote)

---

## Installation

1. **Change into the backend folder**:

   ```bash
   cd backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create a `.env` file** in the `backend` directory with at least:

   ```bash
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/your_db_name
   # Add any additional environment variables your db/ and route files require
   ```

---

## Running the Server

### Development

```bash
npm start
# or
node index.js
```

The server will start on the port defined in `PORT` (defaults to `3000` if not set):

- Base URL: `http://localhost:3000/`

### Test the server

- **Root route**:

  ```bash
  curl http://localhost:3000/
  ```

  Expected response:

  ```text
  Hello World
  ```

---

## API Endpoints (Overview)

Below is a high-level overview; adjust paths and methods to match your route implementations.

- **Users** (`userRoutes` in `routes/router.js`)
  - `GET /api/users` – Get all users
  - `GET /api/users/:id` – Get user by ID
  - `POST /api/users` – Create a new user
  - `PUT /api/users/:id` – Update a user
  - `DELETE /api/users/:id` – Delete a user

- **Products** (`productRoutes` in `routes/productRouter.js`)
  - `GET /api/products` – Get all products
  - `GET /api/products/:id` – Get product by ID
  - `POST /api/products` – Create a new product
  - `PUT /api/products/:id` – Update a product
  - `DELETE /api/products/:id` – Delete a product

- **Orders** (`orderRoutes` in `routes/orderRouter.js`, mounted at `/api`)
  - Example paths (adjust to actual implementation):
    - `GET /api/orders` – Get all orders
    - `GET /api/orders/:id` – Get order by ID
    - `POST /api/orders` – Create a new order
    - `PUT /api/orders/:id` – Update an order
    - `DELETE /api/orders/:id` – Delete an order

---

## Environment Variables

Key environment variables typically used:

- **`PORT`** – Port the Express server listens on (default: `3000`)
- **`MONGODB_URI`** – MongoDB connection string
- Any other custom values (JWT secret, API keys, etc.) referenced in your code.

Never commit `.env` to version control.

---

## Error Handling & Logging

- Startup logs include the server port: `Server is running on port <PORT>`.
- Database connection logs and error handling are defined in `db/connection.js` and/or `db/mongoosedb.js` (check those files for details).

---

## License

Specify your chosen license here, for example:

`MIT License` – Feel free to modify and use this backend for your own projects.

