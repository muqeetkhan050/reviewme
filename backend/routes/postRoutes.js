

// const express = require("express");
// const router = express.Router();
// const auth = require("../middlewares/authMiddleware");
// const { createPost, getAllPosts } = require("../controllers/postController");

// router.post("/posts/new", auth, createPost); // 🔐 protected
// router.get("/posts", auth, getAllPosts);

// module.exports = router;

// backend/routes/postRoutes.js
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { createPost, getAllPosts, upvotePost, downvotePost, getUserPosts } = require("../controllers/postController");

router.post("/posts/new", auth, createPost);
router.get("/posts", auth, getAllPosts);
router.post("/posts/:postId/upvote", auth, upvotePost);
router.post("/posts/:postId/downvote", auth, downvotePost);
router.get("/posts/user/:userId", auth, getUserPosts); // Get posts by user

module.exports = router;