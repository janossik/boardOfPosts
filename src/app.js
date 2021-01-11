//Importy
const express = require("express");
const mongoose = require("./database/mongodb");
const modelPost = require("./models/post.model");
const app = express();

//Middleware
app.use(express.json());
app.use("/", express.static(__dirname + "/public"));

//Endpoints
app.get("/posts", (req, res) => {
  modelPost.find((err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
    return result;
  });
});

app.get("/posts/:id", (req, res) => {
  modelPost.findById(req.params.id, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.post("/posts/add", (req, res, next) => {
  const { title, author, body, tag } = req.body;
  var post = new modelPost({ title, author, body, tag });
  res.status(201);
  try {
    post.save(post);
    res.send("Done!");
  } catch (error) {
    console.log(error);
  }
});

app.put("/posts/:id", (req, res) => {
  res.send("Hello World!");
});

app.delete("/posts/:id", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
