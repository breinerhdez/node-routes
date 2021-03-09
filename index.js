const express = require("express");
const app = express();

// app.use("/api/users", require('./controllers/users.controller'))
app.use(require("./routes/web.routes"));
app.use(require("./routes/api.routes"));

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(3000, (err) => {
  console.log("Running...");
});
