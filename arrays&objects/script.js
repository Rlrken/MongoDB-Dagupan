
/* =========================
   STEP 2: ARRAYS
========================= */

// Create arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "mango"];

// Array methods
numbers.push(6);        // add at end
numbers.pop();          // remove last
numbers.unshift(0);     // add at beginning
numbers.shift();        // remove first

console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
console.log("Array Length:", numbers.length);


/* =========================
   STEP 3: OBJECTS
========================= */

// Create object
let student = {
    name: "Rken",
    age: 20,
    course: "BSIT"
};

// Access properties
console.log(student.name);        // dot notation
console.log(student["age"]);      // bracket notation

// Modify properties
student.age = 21;
student["course"] = "BSCS";

console.log("Updated Student:", student);


/* =========================
   STEP 4: BUILT-IN METHODS
========================= */

// forEach
numbers.forEach(num => {
    console.log("forEach value:", num);
});

// map
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter
let filtered = numbers.filter(num => num > 2);
console.log("Filtered (>2):", filtered);


/* =========================
   COMBINE OBJECTS + ARRAYS
========================= */

let students = [
    { name: "Ana", grade: 90 },
    { name: "Ben", grade: 85 },
    { name: "Cara", grade: 92 }
];

// Access array of objects
students.forEach(s => {
    console.log(s.name + " - " + s.grade);
});

// Filter objects
let passing = students.filter(s => s.grade >= 90);
console.log("Passing Students:", passing);


/* =========================
   STEP 5: TESTING
========================= */

console.log("Arrays and Objects Lab Completed");