
/* =========================================================
   1. SYNCHRONOUS EXECUTION
   =========================================================
   - Runs line by line
   - Executes immediately in the call stack
*/

console.log("A");
console.log("B");
console.log("C");

/* Expected Output:
A
B
C
*/


/* =========================================================
   2. ASYNCHRONOUS - setTimeout (MACROTASK)
   =========================================================
   - setTimeout is a macrotask
   - It runs AFTER synchronous code finishes
*/

console.log("Start");

setTimeout(() => {
    console.log("Timeout (Macrotask)");
}, 0);

console.log("End");

/* Expected Output:
Start
End
Timeout (Macrotask)
*/


/* =========================================================
   3. PROMISE (MICROTASK)
   =========================================================
   - Promise.then() is a microtask
   - Microtasks run BEFORE macrotasks
*/

console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise (Microtask)");
});

console.log("End");

/* Expected Output:
Start
End
Promise (Microtask)
*/


/* =========================================================
   4. MICROTASK vs MACROTASK COMPARISON
   =========================================================
   Order:
   1. Sync code
   2. Microtasks (Promise)
   3. Macrotasks (setTimeout)
*/

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

/* Expected Output:
Start
End
Promise
Timeout
*/


/* =========================================================
   5. ASYNC / AWAIT FLOW
   =========================================================
   - await pauses ONLY inside async function
   - rest of program continues first
*/

async function test() {
    console.log("1");

    await Promise.resolve();

    console.log("2");
}

console.log("3");
test();
console.log("4");

/* Expected Output:
3
1
4
2
*/


/* =========================================================
   6. EVENT LOOP OUTPUT PREDICTION
   =========================================================
   Execution order:
   1. Sync code
   2. Microtask queue
   3. Macrotask queue
*/

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

/* Expected Output:
A
D
C
B
*/