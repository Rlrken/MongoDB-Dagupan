# ES6 JavaScript Features Demo

## Overview

This project demonstrates modern ES6 JavaScript features including:
- let and const
- Arrow functions
- Template literals
- Destructuring
- Spread operator
- Default parameters

---

# Step 1: Project Setup

The project contains:
- index.html
- script.js
- README.md

The JavaScript file was linked correctly using:

```html
<script src="script.js"></script>
```

---

# Step 2: Variable Conversion

Old `var` variables were replaced with:

- `let` → for variables that can change
- `const` → for variables that should not change

Example:

```javascript
const school = "ABC University";
let score = 85;
```

---

# Step 3: Arrow Functions

Traditional ES5 functions were converted into ES6 arrow functions.

Example:

```javascript
const greet = (name) => {
  return `Hello ${name}`;
};
```

Benefits:
- Cleaner syntax
- Improved readability

---

# Step 4: Template Literals

String concatenation using `+` was replaced with template literals.

Example:

```javascript
`My name is ${firstName}`
```

Benefits:
- Easier to read
- Cleaner formatting

---

# Step 5: Modern ES6 Features

## Destructuring

Used to extract values from objects.

Example:

```javascript
const { studentName, course } = student;
```

---

## Spread Operator

Used to merge arrays.

Example:

```javascript
const mergedNumbers = [...numbers1, ...numbers2];
```

---

## Default Parameters

Used to assign default values to function parameters.

Example:

```javascript
const multiply = (a, b = 2)
```

---

# Functional Testing

The project was tested successfully in the browser console.

Verified features:
- Variable declarations
- Arrow functions
- Template literals
- Destructuring
- Spread operator
- Default parameters

No runtime errors occurred.

---

# Conclusion

This project demonstrates the transition from traditional JavaScript syntax to modern ES6 features for cleaner and more maintainable code.