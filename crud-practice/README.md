# MongoDB CRUD Operations Practice

## Overview

This lab demonstrates basic CRUD (Create, Read, Update, Delete) operations using MongoDB Shell (`mongosh`).

Database Used:
crudPracticeDB

Collection Used:
items

---

# Step 1: Database Setup

## Start MongoDB Shell

```bash
mongosh
```

## Create / Switch Database

```javascript
use crudPracticeDB
```

This command creates or switches to the database named `crudPracticeDB`.

---

# Step 2: Create Operation

## Insert Single Document

```javascript
db.items.insertOne({
  title: "Learn MongoDB",
  description: "Practice CRUD operations",
  status: "pending"
});
```

### Purpose
Adds one document into the `items` collection.

---

## Insert Multiple Documents

```javascript
db.items.insertMany([
  { title: "Task 1", status: "pending" },
  { title: "Task 2", status: "completed" }
]);
```

### Purpose
Adds multiple documents at the same time.

---

# Step 3: Read Operation

## Fetch All Documents

```javascript
db.items.find();
```

### Purpose
Retrieves all documents from the collection.

---

## Fetch Documents with Condition

```javascript
db.items.find({ status: "pending" });
```

### Purpose
Filters documents where status is `"pending"`.

---

## Fetch Single Document

```javascript
db.items.findOne({ title: "Task 1" });
```

### Purpose
Retrieves one matching document.

---

# Step 4: Update Operation

## Update One Document

```javascript
db.items.updateOne(
  { title: "Task 1" },
  { $set: { status: "completed" } }
);
```

### Purpose
Updates the status field of one document.

---

## Update Multiple Documents

```javascript
db.items.updateMany(
  { status: "pending" },
  { $set: { priority: "high" } }
);
```

### Purpose
Updates all matching documents by adding a priority field.

---

# Step 5: Delete Operation

## Delete One Document

```javascript
db.items.deleteOne({ title: "Task 2" });
```

### Purpose
Deletes a single matching document.

---

## Delete Multiple Documents

```javascript
db.items.deleteMany({ status: "completed" });
```

### Purpose
Deletes all matching documents.

---

# Step 6: Functional Testing

The following operations were tested successfully:

- Insert data
- Query data
- Update fields
- Delete records

---

# Conclusion

This lab demonstrates how CRUD operations work in MongoDB using mongosh.

CRUD stands for:
- Create
- Read
- Update
- Delete

These operations are essential for managing database records in real-world applications.