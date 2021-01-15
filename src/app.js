//Importy
const express = require("express");
const posts = require("./routers/posts")();
require("./database/mongodb");
const app = express();

//Middleware
app.use(express.json());
app.use("/", express.static(__dirname + "/public"));
app.use("/posts", posts);

module.exports = app;
