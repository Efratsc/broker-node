const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller');

// GET /posts - Get all posts
router.get('/posts', postController.getAllPosts);

// GET /posts/:id - Get a single post by ID
router.get('/posts/:id', postController.getPostById);

// POST /posts - Create a new post
router.post('/posts', postController.createPost);

// PUT /posts/:id - Update a post by ID
router.put('/posts/:id', postController.updatePostById);

// DELETE /posts/:id - Delete a post by ID
router.delete('/posts/:id', postController.deletePostById);

module.exports = router;
