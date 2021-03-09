const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Get all rows - V2");
});

app.post("/", (req, res) => {
  res.send("Create a new row - V2");
});

app.put("/:id", (req, res) => {
  res.send("Update a row - V2");
});

app.get("/:id", (req, res) => {
  res.send("Get row by ID - V2");
});

app.delete("/:id", (req, res) => {
  res.send("Delete a row - V2");
});

module.exports = app;
