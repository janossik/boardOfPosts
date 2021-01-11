const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  author: String,
  body: String,
  date: { type: Date, default: Date.now },
  tag: String
});

module.exports = mongoose.model("Post", postSchema);
