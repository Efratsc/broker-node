const Post = require('../models/post-model');
const User = require('../models/user-model');
const Service = require('../models/service-models');

// GET /posts - Get all posts
async function getAllPosts(req, res) {
  try {
    const posts = await Post.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Service, as: 'service' },
      ],
    });
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
}

// GET /posts/:id - Get a single post by ID
async function getPostById(req, res) {
  const postId = req.params.id;
  try {
    const post = await Post.findByPk(postId, {
      include: [
        { model: User, as: 'user' },
        { model: Service, as: 'service' },
      ],
    });
    if (!post) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.json(post);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve post' });
  }
}

// POST /posts - Create a new post
async function createPost(req, res) {
  const { user_id, content, service_id, image } = req.body;
  try {
    const post = await Post.create({
      user_id,
      content,
      service_id,
      image,
    });
    res.status(201).json({ id: post.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create post' });
  }
}

// PUT /posts/:id - Update a post by ID
async function updatePostById(req, res) {
  const postId = req.params.id;
  const { user_id, content, service_id, image } = req.body;
  try {
    const post = await Post.findByPk(postId);
    if (!post) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      await post.update({
        user_id,
        content,
        service_id,
        image,
      });
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to update post' });
  }
}

// DELETE /posts/:id - Delete a post by ID
async function deletePostById(req, res) {
  const postId = req.params.id;
  try {
    const post = await Post.findByPk(postId);
    if (!post) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      await post.destroy();
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete post' });
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
};
