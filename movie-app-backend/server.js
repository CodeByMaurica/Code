// import express
const express = require("express");

// import file system
const fs = require("fs");

// import cors
const cors = require("cors");

// create the application
const app = express();

// create port
const PORT = 3000;

// give ability to use JSON
app.use(express.json());

// allow React frontend
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// file path
const filePath = "./users.json";

// helper function to get users
function getUsers() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
    return [];
  }

  const data = fs.readFileSync(filePath, "utf8");

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

// helper function to save users
function saveUsers(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

// HOME ROUTE
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to LTM Movie Studio!",
  });
});

// GET ALL USERS
app.get("/users", (req, res) => {
  const users = getUsers();

  res.status(200).json(users);
});

// ABOUT ROUTE
app.get("/about", (req, res) => {
  res.send("This is the about route!");
});

// CONTACT ROUTE
app.get("/contact", (req, res) => {
  res.send("contact me at test@gmail.com");
});

// USER ROUTE
app.get("/users/:id", (req, res) => {
  res.json({
    userId: req.params.id,
  });
});

// REGISTER ROUTE
app.post("/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      error: "Please fill in first name, last name, email, and password.",
    });
  }

  if (password.length < 8) {
    return res.status(400).json({
      error: "Password must be at least 8 characters long.",
    });
  }

  const users = getUsers();

  const existingUser = users.find(
    (user) => user.email?.toLowerCase() === email.toLowerCase()
  );

  if (existingUser) {
    return res.status(400).json({
      error: "An account with this email already exists.",
    });
  }

  users.push({
    firstName,
    lastName,
    email,
    username: email,
    password,
  });

  saveUsers(users);

  res.status(201).json({
    message: "Account created successfully.",
  });
});

// LOGIN ROUTE
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      error: "Missing username/email or password.",
    });
  }

  const users = getUsers();

  const existingUser = users.find(
    (user) =>
      user.username?.toLowerCase() === username.toLowerCase() ||
      user.email?.toLowerCase() === username.toLowerCase()
  );

  if (!existingUser) {
    return res.status(404).json({
      error: "User not found.",
    });
  }

  if (existingUser.password !== password) {
    return res.status(401).json({
      error: "Wrong password.",
    });
  }

  res.status(200).json({
    message: "Login successful.",
    user: {
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      email: existingUser.email,
      username: existingUser.username,
    },
  });
});

// DELETE USER ROUTE
app.delete("/users/:username", (req, res) => {
  const username = req.params.username;

  const users = getUsers();

  const existingUser = users.find(
    (user) =>
      user.username?.toLowerCase() === username.toLowerCase() ||
      user.email?.toLowerCase() === username.toLowerCase()
  );

  if (!existingUser) {
    return res.status(404).json({
      error: "User not found.",
    });
  }

  const updatedUsers = users.filter(
    (user) =>
      user.username?.toLowerCase() !== username.toLowerCase() &&
      user.email?.toLowerCase() !== username.toLowerCase()
  );

  saveUsers(updatedUsers);

  res.status(200).json({
    message: "User deleted successfully.",
  });
});

// create server on port 3000
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});