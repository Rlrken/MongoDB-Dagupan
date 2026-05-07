# React Hooks Demo

## Overview

This project demonstrates the use of React Hooks including useState and useEffect.

---

## 1. useState Hook

The useState Hook is used to store and manage component data.

Example:
- A counter state is initialized with value 0
- Clicking the button updates the state

Code Example:
const [count, setCount] = useState(0);

Purpose:
- Store dynamic values
- Trigger UI updates when state changes

---

## 2. useEffect Hook

The useEffect Hook is used to handle side effects in React components.

In this project:
- useEffect logs count updates
- useEffect updates the browser tab title

Code Example:
useEffect(() => {
  console.log(count);
}, [count]);

---

## 3. Dependency Array

The dependency array controls when the effect executes.

[count]

This means:
- Effect runs only when count changes

---

## 4. State and UI Connection

The count state is displayed directly in JSX:

<h2>Counter: {count}</h2>

This demonstrates React's reactive UI updates.

---

## 5. Conclusion

This project demonstrates:
- State management using useState
- Side effects using useEffect
- Event handling in React
- Dynamic UI updates