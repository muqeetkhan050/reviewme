const express = require('express');
const {getAllPosts, createPost} = require('../controllers/postController');
const router = express.Router();

router.get('/posts', getAllPosts);



// router.route('/posts').get(getAllPosts);
// router.post('/tweet', createPost);
router.route('/posts/new').post(createPost);
module.exports = router;