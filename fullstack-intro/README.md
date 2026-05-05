# Full Stack Development – Introduction

## 1. Full Stack Development

Full Stack Development is the process of building both the **frontend (client-side)** and **backend (server-side)** of a web application. It also includes working with a database.

A full stack application allows users to interact with a system through a browser while the server processes data and communicates with a database.

---

## 2. Frontend vs Backend Responsibilities

### Frontend (Client-Side)
The frontend is the part of the application that users directly interact with in the browser.

**Responsibilities:**
- Displays the user interface (UI)
- Handles user interactions (clicks, inputs, navigation)
- Sends requests to the backend
- Displays data returned from the backend

**Technologies used:**
- HTML
- CSS
- JavaScript

---

### Backend (Server-Side)
The backend is responsible for handling the logic and data processing of the application.

**Responsibilities:**
- Receives and processes requests from the frontend
- Performs application logic
- Communicates with the database
- Sends responses back to the frontend

**Technologies used:**
- Node.js / Express (example)
- Java / Python (other examples)

---

## 3. Web Application Architecture

A web application follows a **client-server architecture** where different components work together.

### Flow of the Application:

Client (Browser)  
→ Frontend (UI Layer)  
→ Backend (Server)  
→ Database (MongoDB – conceptual)  
→ Backend processes data  
→ Frontend displays response to user  

---

### Explanation of Flow:
1. The user opens the application in a browser (Client)
2. The frontend displays the interface
3. When the user interacts, a request is sent to the backend
4. The backend processes the request
5. The backend communicates with the database (MongoDB conceptually stores data)
6. The response is sent back to the frontend
7. The frontend displays the result to the user

---

## 4. Project Structure
fullstack-intro/
│
├── frontend/ → Contains UI (HTML, CSS, JavaScript)
├── backend/ → Contains server logic and API handling

## 5. Architectural flow:
Client (Browser)
        ↓
Frontend (UI Layer - HTML, CSS, JavaScript)
        ↓
Backend (Server / API - Handles logic)
        ↓
Database (MongoDB - Stores data)
        ↑
Response flows back to Backend
        ↑
Frontend displays data to User