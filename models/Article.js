const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const note = require("./note");

let articleSchema = new Schema({
  id: { type: String, require: true },
  headline: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

let article = mongoose.model("Article", articleSchema);

module.exports = article;
