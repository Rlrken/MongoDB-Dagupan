// ======================================
// STEP 2: var → let / const
// ======================================

// const used for values that do not change
const school = "ABC University";

// let used for variables that may change
let score = 85;

console.log("School:", school);
console.log("Score:", score);

// ======================================
// STEP 3: Arrow Functions
// ======================================

// ES5 Function
/*
function greet(name) {
  return "Hello " + name;
}
*/

// ES6 Arrow Function
const greet = (name) => {
  return `Hello ${name}`;
};

console.log(greet("Ram"));

// ======================================
// STEP 4: Template Literals
// ======================================

const firstName = "John";
const age = 21;

// OLD CONCATENATION
// "My name is " + firstName + " and I am " + age + " years old."

// TEMPLATE LITERAL
const message = `My name is ${firstName} and I am ${age} years old.`;

console.log(message);

// ======================================
// STEP 5: Destructuring
// ======================================

const student = {
  studentName: "Sarah",
  course: "Computer Science"
};

// OBJECT DESTRUCTURING
const { studentName, course } = student;

console.log(studentName);
console.log(course);

// ======================================
// STEP 5: Spread Operator
// ======================================

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

// MERGING ARRAYS
const mergedNumbers = [...numbers1, ...numbers2];

console.log(mergedNumbers);

// ======================================
// STEP 5: Default Parameters
// ======================================

const multiply = (a, b = 2) => {

  return a * b;

};

console.log(multiply(5));
console.log(multiply(5, 4));

// ======================================
// FINAL MESSAGE
// ======================================

console.log("All ES6 features executed successfully!");