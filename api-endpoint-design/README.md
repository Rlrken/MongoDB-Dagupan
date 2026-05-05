# Online Store API Design Documentation

## 1. Resources (Data Entities)

In this API, the system manages the following core resources:

### Products
Represents items available for sale in the online store.
Fields include: id, name, price, category, stock.

### Orders
Represents purchases made by users.
Fields include: orderId, userId, productId, quantity, status.

### Users
Represents customers who use the system.
Fields include: userId, name, email.

### Reviews
Represents feedback given by users on products.
Fields include: reviewId, productId, userId, rating, comment.

---

## 2. Base URI & Versioning

The API uses versioning to ensure backward compatibility:

Base URI: /v1/

All endpoints follow this structure to prevent breaking changes in future updates.

---

## 3. Read Operations (GET)

### Get all products
GET /v1/products


Returns all available products in the system.

---

### Get single product
GET /v1/products/:id


Returns details of a specific product using its unique ID.

---

### Filtering, sorting, pagination
GET /v1/products?category=electronics&sort=price_asc&limit=10


Allows users to:
- Filter products by category
- Sort by price
- Limit number of results

---

## 4. Write Operations

### Create order
POST /v1/orders


Creates a new order in the system using JSON data.

---

### Delete order
DELETE /v1/orders/:id


Removes a specific order from the system.

---

## 5. Nested Resources

### User orders
GET /v1/users/:userId/orders

Returns all orders belonging to a specific user.

---

### Product reviews
GET /v1/products/:productId/reviews


Returns all reviews associated with a product.

---

## 6. HTTP Status Codes

- 200 OK → Successful request
- 201 Created → Resource successfully created
- 400 Bad Request → Invalid input
- 404 Not Found → Resource not found
- 500 Internal Server Error → Server failure

---

## 7. Summary of API Design

This API follows REST principles and includes:

- Clear separation of resources (Products, Orders, Users, Reviews)
- Proper use of HTTP methods (GET, POST, DELETE)
- Versioned base URI (/v1)
- Query parameters for filtering and pagination
- Nested resource relationships
- Standard HTTP status codes


## Evidence of Resource Identification

The system is built around the following clearly defined resources:

- Products → items available in the online store
- Orders → customer purchase transactions
- Users → system accounts

These resources are implemented and represented in the API endpoints found in `api_endpoints.js`.

---

## Evidence of Methods (CRUD Operations)

The API uses standard REST methods:

- GET → Retrieve resources (products, orders, users)
- POST → Create new resources (orders)
- PUT → Update existing resources
- DELETE → Remove resources

---

## Evidence of RESTful Design

The following principles are applied:

- Path Parameters → `/products/:id`
- Query Parameters → `/products?category=electronics`
- Nested Resources → `/users/:userId/orders`
- Versioning → `/v1/`

---

## Conclusion

This API design demonstrates a complete understanding of:
- Resource-oriented architecture
- RESTful API principles
- HTTP methods and status codes
- Query and path parameter usage