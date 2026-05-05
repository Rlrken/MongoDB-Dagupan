# Online Store API Design

## Step 1: Conceptual Setup

### 1.1 Resources (Data Entities)

The primary resources in an Online Store API are:

- Products (items for sale: name, price, category, stock)
- Orders (customer purchases)
- Users (customer accounts)
- Reviews (product feedback)

---

### 1.2 Base URI & Versioning

Base URI:

/v1/


Examples:
- /v1/products
- /v1/orders
- /v1/users

Versioning ensures future updates do not break existing applications.

---

## Step 2: Read Operations (GET)

### 2.1 Get All Products

GET /v1/products


Returns a list of all products.

---

### 2.2 Get Single Product

GET /v1/products/:id


Example:

GET /v1/products/101


Returns details of a specific product.

---

### 2.3 Filtering, Sorting, Pagination

GET /v1/products?category=electronics&sort=price_asc&limit=10


Features:
- Filter by category
- Sort by price
- Limit results

---

## Step 3: Write Operations

### 3.1 Create Order

POST /v1/orders


Example body:
```json
{
  "userId": 1,
  "productId": 101,
  "quantity": 2
}

Creates a new order.

### 3.2 Delete Order
DELETE /v1/orders/:id

Example:

DELETE /v1/orders/55

Deletes a specific order.

## Step 4: Nested Resources
###4.1 User Orders
GET /v1/users/:userId/orders

Example:

GET /v1/users/10/orders

Returns all orders of a user.

### 4.2 Product Reviews
GET /v1/products/:productId/reviews

Example:

GET /v1/products/101/reviews

Returns reviews for a product.

## Step 5: HTTP Status Codes
Scenario	Code
Success (GET)	200
Created (POST)	201
Bad Request	400
Not Found	404
Server Error	500
Deleted Successfully	200 / 204