// ======================================
// CONDITIONAL STATEMENTS EXAMPLE
// ======================================

// Variable for testing conditions
let score = 85;

// if, else if, else example
if (score >= 90) {

  console.log("Excellent Performance!");

} else if (score >= 75) {

  console.log("Good Job!");

} else {

  console.log("Needs Improvement");

}

// ======================================
// LOOP EXAMPLES
// ======================================

console.log("\nFor Loop Example:");

// for loop example
for (let i = 1; i <= 5; i++) {

  console.log("Loop Count:", i);

}

console.log("\nWhile Loop Example:");

// while loop example
let count = 1;

while (count <= 3) {

  console.log("While Count:", count);

  count++;

}

// ======================================
// FUNCTION EXAMPLES
// ======================================

// Reusable function
function greetUser(name) {

  return `Hello, ${name}! Welcome to JavaScript Functions.`;

}

// Calling function
console.log("\nFunction Example:");

console.log(greetUser("Ram"));

// Another reusable function
function addNumbers(a, b) {

  return a + b;

}

console.log("Addition Result:", addNumbers(10, 5));