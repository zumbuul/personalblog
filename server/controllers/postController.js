const postModel = require("../models/postModel");
const commentModel = require("../models/commentModel");
const e = require("express");
exports.getAllPosts = async (req, res) => {
  const posts = await postModel.find({});
  res.json({ posts: posts });
};

exports.getPostWithID = async (req, res) => {
  const post = await postModel
    .findById(req.params.id)
    .populate("comments")
    .exec((err, post) => {
      if (err) return console.log(err);
      res.json(post);
    });
};

exports.deletePost = (req, res) => {
  const postID = req.params.id;
  postModel.deleteOne({ _id: postID }, (err) => {
    console.log(err);
  });
};

exports.updatePost = (req, res) => {
  const postID = req.params.id;
  postModel.updateOne({ _id: postID }, {});
};

exports.countTagsOnPost = async (req, res) => {
  let tagCounter = 0;
  const { tag } = req.params;
  console.log(tag);
  const posts = await postModel.find({});
  posts.map((post) => {
    if (post.tags.includes(tag)) tagCounter++;
  });
  res.json({ tags: tagCounter });
};

exports.createNewPost = async (req, res) => {
  const post = new postModel({
    title: req.body.title,
    text: req.body.text,
    isPost: req.body.isPost,
    coments: [],
    tags: [],
  });
  await post.save();
  console.log(req.body);
};

exports.switchPostType = (req, res) => {
  const { type, id } = req.body;
  postModel.findById(id, async (err, post) => {
    if (err) {
      console.log(`errors ${err}`);
    }
    post.isPost = type;
    post.save();
    const posts = await postModel.find({});
    console.log(posts);
    res.json({ posts: posts });
  });
};
