const postModel = require("../models/postModel");
const commentModel = require("../models/commentModel");
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
  postModel.deleteOne({ _id: postID });
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
  posts.map(post => {
    if (post.tags.includes(tag)) tagCounter++;
  });
  res.json({ tags: tagCounter });
};
