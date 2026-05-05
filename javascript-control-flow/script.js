/* =====================
   STEP 2: CONDITIONAL STATEMENTS
   ===================== */

// 2.1 if / else if / else — Grade Checker
const score = 85;

if (score >= 90) {
    console.log(`Score: ${score} → Grade: A (Excellent!)`);
} else if (score >= 80) {
    console.log(`Score: ${score} → Grade: B (Good Job!)`);
} else if (score >= 70) {
    console.log(`Score: ${score} → Grade: C (Passing)`);
} else if (score >= 60) {
    console.log(`Score: ${score} → Grade: D (Needs Improvement)`);
} else {
    console.log(`Score: ${score} → Grade: F (Failed)`);
}

// Another condition — Age Checker
const age = 20;

if (age >= 18) {
    console.log(`Age: ${age} → You are an adult.`);
} else {
    console.log(`Age: ${age} → You are a minor.`);
}


/* =====================
   STEP 3: LOOPS
   ===================== */

// 3.1 for loop — Count 1 to 5
console.log("\n--- for loop: Count 1 to 5 ---");
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}

// while loop — Countdown
console.log("\n--- while loop: Countdown ---");
let countdown = 5;
while (countdown > 0) {
    console.log(`Countdown: ${countdown}`);
    countdown--;
}
console.log("Blast off!");

// for loop — Multiplication Table of 3
console.log("\n--- Multiplication Table of 3 ---");
for (let i = 1; i <= 10; i++) {
    console.log(`3 x ${i} = ${3 * i}`);
}


/* =====================
   STEP 4: FUNCTIONS
   ===================== */

// 4.1 Basic function — Greet a user
function greetUser(name) {
    return `Hello, ${name}! Welcome to the lab.`;
}

// Function — Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function — Check if a number is even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return `${num} is Even.`;
    } else {
        return `${num} is Odd.`;
    }
}

// Function — Find the largest of three numbers
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return `${a} is the largest.`;
    } else if (b >= a && b >= c) {
        return `${b} is the largest.`;
    } else {
        return `${c} is the largest.`;
    }
}

// Call the functions and display results
console.log("\n--- Functions ---");
console.log(greetUser("Rken"));
console.log(`Sum of 12 + 8 = ${addNumbers(12, 8)}`);
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(4));
console.log(findLargest(10, 45, 30));