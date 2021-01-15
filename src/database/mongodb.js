const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("useCreateIndex", true);
const uri = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@fd-squad.zz6gv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    err
      ? console.error("Database: " + err.message)
      : console.log(`Database was connetct!`);
  }
);

module.exports = mongoose;
