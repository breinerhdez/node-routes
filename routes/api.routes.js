const express = require("express");
const app = express();

app.use("/api/users", require("../controllers/users.controller"));
app.use("/api/v2/users", require("../controllers/users.controller-v2"));

module.exports = app;
