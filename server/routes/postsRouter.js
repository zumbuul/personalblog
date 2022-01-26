const router = require("express").Router();
const postController = require("../controllers/postController");
const verify = require("../verifyToken");

//GET - GET ALL POSTS
router.get("/", postController.getAllPosts);
//GET - GET ALL POSTS WITH AUTH
router.get("/authAllPosts", postController.getAllPosts);
//POST - CREATE NEW POST
router.post("/", postController.createNewPost);
//GET - GET POST WITH ID /ID
router.get("/:id", postController.getPostWithID);
//
router.get("/tags/:tag", postController.countTagsOnPost);
//DELETE - DELETE POST WITH ID :ID
router.delete("/:id", postController.deletePost);
//PUT - UPDATE POST WITH ID :ID
router.put("/:id", postController.switchPostType);

module.exports = router;
