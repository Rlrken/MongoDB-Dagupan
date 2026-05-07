// =========================
// IMPORT MONGOOSE
// =========================
const mongoose = require("mongoose");

// =========================
// CONNECT TO MONGODB
// =========================
mongoose.connect("mongodb://127.0.0.1:27017/schemaDemoDB")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Connection Error:", err);
  });

// =========================
// CREATE SCHEMA
// =========================
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// =========================
// CREATE MODEL
// =========================
const User = mongoose.model("User", userSchema);

// =========================
// INSERT SAMPLE DATA
// =========================
async function runDemo() {

  try {

    // Create new user
    const newUser = new User({
      name: "John Doe",
      email: "john@example.com",
      age: 22
    });

    // Save user to database
    await newUser.save();

    console.log("Data inserted successfully");

    // =========================
    // FETCH DATA
    // =========================
    const users = await User.find();

    console.log("Retrieved Data:");
    console.log(users);

  } catch (error) {

    console.log("Error:", error);

  } finally {

    mongoose.connection.close();

  }
}

// Run application
runDemo();