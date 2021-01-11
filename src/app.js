//Importy
const express = require("express");
const app = express();
//Middleware
app.use("/", express.static(__dirname + "/public"));

//Endpoints
app.get("/posts", (req, res) => {
  res.send("Hello World!");
});

app.get("/posts/:id", (req, res) => {
  res.send(req.params.id);
});

app.post("/posts/add", (req, res) => {
  res.send("Hello World!");
});

app.put("/posts/edit", (req, res) => {
  res.send("Hello World!");
});

app.delete("/posts/remove", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
