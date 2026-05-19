// import express
const express = require('express');

// create the express app
const app = express();


// ROOT ROUTE
app.get("/", (req, res) => {
  res.send("Backend is working!");
});


// MOVIES ROUTE
app.get("/movies", (req, res) => {
  res.send("This is the movies route!");
});


// USERS ROUTE
app.get("/users", (req, res) => {
  res.send("This is the users route!");
});


// ABOUT ROUTE
app.get("/about", (req, res) => {
  res.send("This backend was built by Maurica!");
});


// create server on port 3000
app.listen(3000, () => {
  console.log("http://localhost:3000");
});