// const express = require('express');
// const {getAllPosts, createPost} = require('../controllers/postController');
// const router = express.Router();

// router.get('/posts', getAllPosts);


// router.route('/posts/new').post(createPost);
// module.exports = router;

const express = require('express');
const { createPost, getAllPosts } = require('../controllers/postController');
const router = express.Router();

router.get('/posts', getAllPosts);
router.post('/posts/new', createPost);

module.exports = router;
