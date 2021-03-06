const router = require("express").Router();
const postController = require("../controllers/postController");

//GET - GET ALL POSTS
router.get("/", postController.getAllPosts);
//POST - CREATE NEW POST
router.get("/");
//GET - GET POST WITH ID /ID
router.get("/:id", postController.getPostWithID);
//
router.get("/tags/:tag", postController.countTagsOnPost);
//DELETE - DELETE POST WITH ID :ID
router.delete("/:id");
//PUT - UPDATE POST WITH ID :ID
router.put("/:id");

module.exports = router;
