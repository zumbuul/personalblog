const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
    tags: [{ type: String }],
  },
  { timestamps: true }
);
postSchema.set("toObject", { getters: true });

postSchema.virtual("url").get(function () {
  return "/blog/post/${this._id}";
});

module.exports = mongoose.model("posts", postSchema);
