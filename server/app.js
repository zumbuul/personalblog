const express = require("express");
const cors = require("cors");
const postsRouter = require("./routes/postsRouter");
const commentsRouter = require("./routes/commentsRouter");
require("dotenv").config();
require("./config/dbcon")();
/*
const userModel = require("./models/postModel");

const post = new userModel({
  title: "paja",
  text: "samo saim se",
  tags: ["express", "nodejs"],
});
post.save();
*/

const app = express();

app.use(express.json())
app.use(cors());

app.use("/api/posts", postsRouter);
app.use("/api/comments", commentsRouter);

app.listen(process.env.DEV_PORT, () => {
  console.log(`Hosting server @ port ${process.env.DEV_PORT}`);
});
