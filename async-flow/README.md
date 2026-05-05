# Asynchronous JavaScript & Event Loop

## 1. Synchronous vs Asynchronous Execution

Synchronous code runs line by line in order.

Example:
console.log("A");
console.log("B");
console.log("C");

Output:
A → B → C

Asynchronous code allows tasks to run later without blocking execution.

Example:
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

Output:
Start → End → Timeout

This shows that setTimeout runs after synchronous code.

---

## 2. Event Loop Behavior

JavaScript uses an Event Loop to handle execution order:

1. Executes synchronous code first (Call Stack)
2. Microtasks (Promises)
3. Macrotasks (setTimeout, setInterval)

---

## 3. Microtask vs Macrotask

### Microtask
- Promise.then()
- Runs BEFORE macrotasks

### Macrotask
- setTimeout
- Runs AFTER microtasks

Example:
Promise.resolve().then(() => console.log("Promise"));
setTimeout(() => console.log("Timeout"), 0);

Output:
Promise → Timeout

---

## 4. Async/Await Behavior

Async functions return Promises.

Example:
async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

console.log("3");
test();
console.log("4");

Output:
3 → 1 → 4 → 2

Explanation:
- await pauses execution inside async function
- rest of code continues first

---

## 5. Output Prediction (Debugging)

Code:
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

Execution order:
A → D → C → B

Explanation:
- A, D = synchronous
- C = microtask (runs first)
- B = macrotask (runs last)

---

## 6. Summary

This lab demonstrates:
- Synchronous vs asynchronous execution
- Event Loop behavior
- Microtask vs Macrotask priority
- Async/Await flow
- Output prediction and debugging