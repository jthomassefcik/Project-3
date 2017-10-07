const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  author: { type: String, required: true },
  text: { type: String, required: true },
});

const Comment = mongoose.model("comment", CommentsSchema);

module.exports = Comment;