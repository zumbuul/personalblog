const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  author: { type: String, required: true },
  text: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comments", commentSchema);
