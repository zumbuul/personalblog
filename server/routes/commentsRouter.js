const router = require("express").Router();
const commentRouter = require("../controllers/commentController");

//GET - GET ALL COMMENTS ON A SPECIFIC POST
router.get("/:id", commentRouter.getCommentsOnOnePost);
//POST - CREATE NEW COMMENT
router.post("/new", commentRouter.createComment);
//DELETE - DELETE COMMENT AS ADMIN
router.delete("/:id");
//PUT - UPDATE COMMENT AS ADMIN
router.put("/:id");
module.exports = router;
