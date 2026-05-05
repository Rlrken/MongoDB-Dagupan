const fs = require("fs");

const fileName = "message.txt";


/* =========================
   ADD FUNCTIONALITY
========================= */

function addContent(content) {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.log("Error writing file:", err);
    } else {
      console.log("File created/updated successfully!");
    }
  });
}


/* =========================
   DELETE FUNCTIONALITY
========================= */

function deleteFile() {
  fs.unlink(fileName, (err) => {
    if (err) {
      console.log("Error deleting file (maybe it doesn't exist)");
    } else {
      console.log("File deleted successfully!");
    }
  });
}


/* =========================
   DEMO EXECUTION (DYNAMIC)
========================= */

// ADD content
addContent("Hello Node.js - This file is created dynamically!");

// Uncomment this line to test DELETE functionality:
// deleteFile();