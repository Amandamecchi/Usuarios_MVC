const express = require("express");

const router = express.Router();

const PostControllers = require("../controllers/postController");

router.get('/post', PostControllers.getAllPost);
router.post('/post', PostControllers.addPost);
router.get('/post/:id', PostControllers.getPostById);
router.put('/post/:id', PostControllers.updatePost);
router.delete('/post/:id', PostControllers.deletePost);

module.exports = router;