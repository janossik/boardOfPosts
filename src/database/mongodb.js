const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.username}:${process.env.password}@fd-squad.zz6gv.mongodb.net/${process.env.dbname}?retryWrites=true&w=majority`;
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    err ? console.error(err) : console.log(`Database was connetct!`);
  }
);

module.exports = mongoose;
