

const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { createPost, getAllPosts } = require("../controllers/postController");

router.post("/posts/new", auth, createPost); // 🔐 protected
router.get("/posts", auth, getAllPosts);

module.exports = router;
