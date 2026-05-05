
/* =========================
   STEP 1: SYNCHRONOUS EXECUTION
========================= */

console.log("A");
console.log("B");
console.log("C");


/* =========================
   STEP 2: setTimeout (Macrotask)
========================= */

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");


/* =========================
   STEP 3: PROMISE (Microtask)
========================= */

console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");


/* =========================
   STEP 4: Microtask vs Macrotask
========================= */

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");


/* =========================
   STEP 5: ASYNC / AWAIT FLOW
========================= */

async function test() {
    console.log("1");

    await Promise.resolve();

    console.log("2");
}

console.log("3");
test();
console.log("4");


/* =========================
   STEP 6: OUTPUT PREDICTION
========================= */

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");