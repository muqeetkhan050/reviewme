

const Post = require('../models/Post');
exports.createPost = async (req, res) => {
  try {
    const postData = await Post.create(req.body);

    console.log("📥 BODY RECEIVED:", req.body);
    console.log("✅ POST SAVED:", postData);

    const allPosts = await Post.find().sort({ createdAt: -1 });

    res.status(201).json({
      success: true,
      posts: allPosts, // return all posts
    });

  } catch (error) {
    console.error('❌ CREATE POST ERROR:', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL POSTS
exports.getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json({
      success: true,
      posts: allPosts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
