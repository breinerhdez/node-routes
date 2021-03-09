const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Get all rows");
});

app.post("/", (req, res) => {
  res.send("Create a new row");
});

app.put("/:id", (req, res) => {
  res.send("Update a row");
});

app.get("/:id", (req, res) => {
  res.send("Get row by ID");
});

app.delete("/:id", (req, res) => {
  res.send("Delete a row");
});

module.exports = app;
