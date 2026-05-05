/* =========================
   STEP 2: var → let / const
========================= */

// OLD: var (not recommended)
// var studentName = "John";

// NEW:
let studentName = "John";   // can be changed
const country = "Philippines"; // cannot be changed

studentName = "Mark";

console.log("Name:", studentName);
console.log("Country:", country);


/* =========================
   STEP 3: Arrow Functions
========================= */

// ES5 function (old way)
// function multiply(a, b) {
//     return a * b;
// }

// ES6 Arrow Function
const multiply = (a, b) => a * b;

console.log("Multiply:", multiply(4, 5));


/* =========================
   STEP 4: Template Literals
========================= */

const student = "Rken";
const course = "BSIT";

// OLD:
// console.log("Student: " + student + " Course: " + course);

// NEW:
console.log(`Student: ${student}, Course: ${course}`);


/* =========================
   STEP 5: MODERN ES6 FEATURES
========================= */

/* ---------- Destructuring ---------- */

const user = {
    id: 1,
    username: "coder123",
    email: "coder@example.com"
};

const { username, email } = user;

console.log("Username:", username);
console.log("Email:", email);


/* ---------- Spread Operator ---------- */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

console.log("Combined Array:", combined);


/* ---------- Default Parameters ---------- */

const greet = (name = "Guest") => {
    return `Hello, ${name}`;
};

console.log(greet("Alice"));
console.log(greet()); // uses default value


/* =========================
   FINAL CHECK
========================= */

console.log("ES6 Conversion Lab Completed");