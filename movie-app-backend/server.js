// import express
const express = require("express");

// import file system
const fs = require("fs");

// create the application
const app = express();

// give ability to use JSON
app.use(express.json());

// get information from "/" which is root of the website
app.get("/", (req, res) => {
  res.send("Welcome to the best database in the world!");
});

// GET ALL USERS
app.get("/users", (req, res) => {
  const filePath = "./users.json";

  let users = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    users = data ? JSON.parse(data) : [];
  }

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
  console.log("params:", req.params);

  res.json({
    userId: req.params.id,
  });
});

// REGISTER ROUTE
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      error: "Missing username or password",
    });
  }

  const filePath = "./users.json";

  let users = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    users = data ? JSON.parse(data) : [];
  }

  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    return res.status(400).json({
      error: "User already exists",
    });
  }

  users.push({
    username,
    password,
  });

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.status(201).json({
    message: "User saved successfully",
  });
});

// LOGIN ROUTE
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      error: "Missing username or password",
    });
  }

  const filePath = "./users.json";

  let users = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    users = data ? JSON.parse(data) : [];
  }

  const existingUser = users.find((user) => user.username === username);

  if (!existingUser) {
    return res.status(404).json({
      error: "User not found",
    });
  }

  if (existingUser.password !== password) {
    return res.status(401).json({
      error: "Wrong password",
    });
  }

  res.status(200).json({
    message: "Login successful",
  });
});

// DELETE USER ROUTE
app.delete("/users/:username", (req, res) => {
  const username = req.params.username;

  const filePath = "./users.json";

  let users = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    users = data ? JSON.parse(data) : [];
  }

  const existingUser = users.find((user) => user.username === username);

  if (!existingUser) {
    return res.status(404).json({
      error: "User not found",
    });
  }

  const updatedUsers = users.filter((user) => user.username !== username);

  fs.writeFileSync(filePath, JSON.stringify(updatedUsers, null, 2));

  res.status(200).json({
    message: "User deleted successfully",
  });
});

// create server on port 3000
app.listen(3000, () => {
  console.log("http://localhost:3000");
});