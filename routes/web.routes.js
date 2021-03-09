const express = require("express");
const app = express();

app.use("/users", require("../controllers/users.controller"));
app.use("/v2/users", require("../controllers/users.controller-v2"));

module.exports = app;
