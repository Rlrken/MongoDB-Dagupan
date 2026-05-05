const express = require("express");
const app = express();

const PORT = 3000;

/* =========================
   STEP 4.1: LOGGER MIDDLEWARE
========================= */

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

/* =========================
   STEP 2.2: ROOT ROUTE
========================= */

app.get("/", (req, res) => {
  res.send("Welcome to Route Handling!");
});

/* =========================
   STEP 2.3: ABOUT ROUTE
========================= */

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1>");
});

/* =========================
   STEP 3.1: ROUTE PARAMS
========================= */

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Viewing Product ID: ${id}`);
});

/* =========================
   STEP 3.2: QUERY STRINGS
========================= */

app.get("/search", (req, res) => {
  const term = req.query.q;
  res.send(`Searching for: ${term}`);
});

/* =========================
   STEP 5.1: 404 HANDLER
========================= */

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

/* =========================
   START SERVER
========================= */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});