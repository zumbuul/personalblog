const { findById } = require("../models/commentModel");
const commentModel = require("../models/commentModel");
const postModel = require("../models/postModel");

exports.getCommentsOnOnePost = async (req, res) => {
  const post = await postModel
    .findById(req.params.id)
    .populate("comments")
    .exec((err, post) => {
      if (err) return console.log(err);
    });
};

exports.deleteComment = (req, res) => {
  const commentID = req.params.id;
  commentModel.deleteOne({ _id: commentID });
};

exports.updateComment = (req, res) => {
  const commentID = req.params.id;
  commentModel.updateOne({ _id: commentID }, { text: req.body.text });
};

exports.createComment = async (req, res) => {
  const { name, commentedOn, text } = req.body;

  const post = await postModel.findById(commentedOn);

  const comment = new commentModel({ author: name, text: text });

  comment.save().then((comment) => {
    post.comments.push(comment._id);
    post.save();
  });
};
