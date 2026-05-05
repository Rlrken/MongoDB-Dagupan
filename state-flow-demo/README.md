# React State Flow Demonstration

## 1. State Flow in React

This application demonstrates how state flows from a parent component to child components.

### Flow Explanation:
- Parent component holds the state using useState
- State is passed down to child components using props
- Child components receive data but do not directly modify parent state
- State changes in parent automatically update all child components

This shows React's **unidirectional data flow**, where data moves only from parent → child.

---

## 2. Props Usage

Props are used to pass data from Parent to Child components.

Example:
- Parent passes state and functions to Child
- Child receives them as props

This allows components to communicate without sharing state directly.

---

## 3. Unidirectional Data Flow

React follows a one-way data flow:

Parent → Child → Display

- Parent owns the state
- Child can request updates via callback
- UI updates automatically when state changes

This prevents data inconsistency and makes applications easier to debug.

---

## 4. Summary

This project demonstrates:
- State management using useState
- Props for communication between components
- Callback functions for child-to-parent updates
- Unidirectional data flow in React