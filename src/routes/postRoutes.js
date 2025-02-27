const express = require("express");

const router = express.Router();

const PostController = require("../controllers/postController");

router.get('/', PostController.getAllPost);
router.post('/', PostController.addPost);
router.get('/:id', PostController.getPostById);
router.put('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);

module.exports = router;