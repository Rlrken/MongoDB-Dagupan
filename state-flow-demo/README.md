# React State Flow Demo

## Overview

This project demonstrates React state flow concepts including:
- Parent state management
- Props
- Callback functions
- Child-to-parent communication
- Shared state flow
- Unidirectional data flow

---

# Step 1: Project Setup

A React application was created using Vite.

Main files:
- App.jsx
- Parent.jsx
- Child.jsx
- Display.jsx

The project runs successfully using:

```bash
npm run dev
```

---

# Step 2: Parent Component State

State was created in the Parent component using the `useState` Hook.

Example:

```jsx
const [message, setMessage] = useState("Hello from Parent Component");
```

Purpose:
- Store shared application data
- Manage updates centrally

---

# Step 3: Passing Props

State data was passed from Parent to Child components using props.

Example:

```jsx
<Child message={message} />
```

Purpose:
- Share data between components
- Maintain React's unidirectional data flow

---

# Step 4: Child to Parent Communication

A callback function was passed from Parent to Child.

Example:

```jsx
updateMessage={updateMessage}
```

The Child component triggered state updates using a button click.

Purpose:
- Allow child components to update parent state
- Demonstrate event handling

---

# Step 5: Shared State Flow

Multiple components shared the same state from the Parent component.

Components:
- Child.jsx
- Display.jsx

When the state updates:
- All components automatically re-render
- Data remains consistent

---

# Step 6: Unidirectional Data Flow

React uses one-way data flow:
- Parent sends data to children using props
- Children cannot directly modify parent state
- State updates occur through callback functions

Flow Example:

Parent State → Props → Child Components

This improves:
- Predictability
- Debugging
- Maintainability

---

# Step 7: Debugging State Flow

Console logs were used to track state updates.

Example:

```jsx
console.log("State Updated:", newMessage);
```

React DevTools can also be used to inspect:
- Props
- State
- Component hierarchy

---

# Step 8: Prop Drilling Awareness

The project demonstrates how props are passed through components.

Limitation:
- Passing props deeply across many components can become difficult.

Possible solutions:
- Context API
- Redux
- Zustand

---

# Functional Testing

The following features were tested successfully:
- State initialization
- Props passing
- Callback execution
- UI updates
- Shared state synchronization

No console or runtime errors occurred.

---

# Conclusion

This project demonstrates React state flow concepts including:
- State management
- Props
- Unidirectional data flow
- Component communication
- Shared state handling