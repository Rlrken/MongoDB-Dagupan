/* =========================
   STEP 2: VARIABLES
========================= */

// var, let, const
var name = "Rlrken";
let age = 20;
const isStudent = true;

// Display in console
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);


/* =========================
   STEP 3: DATA TYPES
========================= */

// Number
let numberValue = 10;

// String
let stringValue = "Hello World";

// Boolean
let booleanValue = false;

// Array
let fruits = ["apple", "banana", "mango"];

// Object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};

// Check data types using typeof
console.log(typeof numberValue);   // number
console.log(typeof stringValue);   // string
console.log(typeof booleanValue);  // boolean
console.log(typeof fruits);        // object (arrays are objects in JS)
console.log(typeof person);        // object


/* =========================
   STEP 4: OPERATORS
========================= */

// Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

// Comparison Operators
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a == b:", a == b);
console.log("a === b:", a === b);

// Logical Operators
let x = true;
let y = false;

console.log("AND:", x && y);
console.log("OR:", x || y);
console.log("NOT:", !x);


/* =========================
   STEP 5: TESTING OUTPUT
========================= */

console.log("All tests completed successfully.");
document.body.innerHTML += "<h2>Script is working!</h2>";