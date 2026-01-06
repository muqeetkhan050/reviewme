

const express = require('express');
const { createPost, getAllPosts } = require('../controllers/postController');
const router = express.Router();

router.get('/posts', getAllPosts);
router.post('/posts/new', createPost);

module.exports = router;
