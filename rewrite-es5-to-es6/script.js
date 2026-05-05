/* =========================
   STEP 2: var → let / const
========================= */

// OLD (ES5):
// var studentName = "John";
// var country = "Philippines";

// NEW (ES6):
let studentName = "John";       // let — can be reassigned
const country = "Philippines";  // const — never changes

studentName = "Mark";           // reassignment works with let

console.log("Name:", studentName);
console.log("Country:", country);


/* =========================
   STEP 3: Arrow Functions
========================= */

// OLD (ES5):
// function multiply(a, b) {
//     return a * b;
// }

// NEW (ES6 Arrow Function):
const multiply = (a, b) => a * b;

// Arrow function with block body
const square = (n) => {
    return n * n;
};

console.log("Multiply:", multiply(4, 5));
console.log("Square:", square(6));


/* =========================
   STEP 4: Template Literals
========================= */

const student = "Rken";
const course = "BSIT";
const year = 3;

// OLD (ES5):
// console.log("Student: " + student + ", Course: " + course + ", Year: " + year);

// NEW (ES6 Template Literal):
console.log(`Student: ${student}, Course: ${course}, Year Level: ${year}`);

// Multi-line template literal
const profile = `
  Name   : ${student}
  Course : ${course}
  Year   : ${year}
`;
console.log(profile);


/* =========================
   STEP 5: MODERN ES6 FEATURES
========================= */

/* ---------- Object Destructuring ---------- */

const user = {
    id: 1,
    username: "coder123",
    email: "coder@example.com",
    role: "admin"
};

// Extract specific properties
const { username, email, role } = user;

console.log("Username:", username);
console.log("Email:", email);
console.log("Role:", role);

/* ---------- Array Destructuring ---------- */

const scores = [95, 88, 76, 60];
const [first, second, , fourth] = scores;  // skip third with empty comma

console.log("1st Score:", first);
console.log("2nd Score:", second);
console.log("4th Score:", fourth);


/* ---------- Spread Operator (Arrays) ---------- */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Merge arrays
const combined = [...arr1, ...arr2];
console.log("Combined Array:", combined);

// Copy an array
const arrCopy = [...arr1];
console.log("Array Copy:", arrCopy);


/* ---------- Spread Operator (Objects) ---------- */

const baseInfo = { school: "PSU", campus: "Dagupan" };
const studentInfo = { ...baseInfo, studentName, course };

console.log("Student Info:", studentInfo);


/* ---------- Default Parameters ---------- */

const greet = (name = "Guest", greeting = "Hello") => {
    return `${greeting}, ${name}!`;
};

console.log(greet("Alice", "Welcome"));  // custom values
console.log(greet("Bob"));              // uses default greeting
console.log(greet());                   // uses all defaults


/* =========================
   FINAL CHECK
========================= */

console.log("ES6 Conversion Lab Completed!");