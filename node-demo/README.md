# Node.js File System Lab - Evidence Report

## Criterion 1: Node.js Runtime Verification

The Node.js runtime was verified using the command:

node -v

This confirms that Node.js is installed and functioning properly in the system.

---

## Criterion 2: Project Setup

A project folder was created and initialized using:

npm init -y

This generated a valid package.json file confirming Node.js project setup.

---

## Criterion 3: File System Module Usage

The built-in fs module was imported using:

const fs = require("fs");

This module was used to perform file operations such as creating and deleting files.

---

## Criterion 4: Add Functionality (File Creation)

A function was implemented using:

fs.writeFile()

This allows the program to create or update a file named message.txt with dynamic content.

Example behavior:
- Creates file if it does not exist
- Updates file if it already exists

---

## Criterion 5: Delete Functionality and Error Handling

File deletion was implemented using:

fs.unlink()

This allows removal of files dynamically.

Error handling was also included:
- Handles missing file errors
- Prevents program crash if file does not exist

Example errors handled:
- ENOENT (file not found)

---

## Summary

This lab demonstrates:
- Node.js runtime usage
- File system operations (add and delete)
- Error handling in CLI applications
- JavaScript execution in server-side environment