


// const Post = require("../models/Post");

// exports.createPost = async (req, res) => {
//   try {
//     const post = await Post.create({
//       title: req.body.title,
//       content: req.body.content,
//       author: req.user._id, // Author from token
//     });

//     const posts = await Post.find().populate("author", "name").sort({ createdAt: -1 });
//     res.status(201).json({ success: true, posts });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// exports.getAllPosts = async (req, res) => {
//   try {
//     const posts = await Post.find().populate("author", "name").sort({ createdAt: -1 });
//     res.json({ success: true, posts });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// backend/controllers/postController.js
const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      author: req.user._id,
    });

    const populatedPost = await Post.findById(post._id).populate("author", "name");
    res.status(201).json({ success: true, post: populatedPost });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name")
      .sort({ createdAt: -1 });
    res.json({ success: true, posts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.upvotePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    // Remove from downvotes if exists
    post.downvotes = post.downvotes.filter(id => id.toString() !== userId.toString());

    // Toggle upvote
    const upvoteIndex = post.upvotes.findIndex(id => id.toString() === userId.toString());
    if (upvoteIndex > -1) {
      // Already upvoted, remove upvote
      post.upvotes.splice(upvoteIndex, 1);
    } else {
      // Add upvote
      post.upvotes.push(userId);
    }

    await post.save();

    const updatedPost = await Post.findById(postId).populate("author", "name");
    res.json({ success: true, post: updatedPost });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.downvotePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    // Remove from upvotes if exists
    post.upvotes = post.upvotes.filter(id => id.toString() !== userId.toString());

    // Toggle downvote
    const downvoteIndex = post.downvotes.findIndex(id => id.toString() === userId.toString());
    if (downvoteIndex > -1) {
      // Already downvoted, remove downvote
      post.downvotes.splice(downvoteIndex, 1);
    } else {
      // Add downvote
      post.downvotes.push(userId);
    }

    await post.save();

    const updatedPost = await Post.findById(postId).populate("author", "name");
    res.json({ success: true, post: updatedPost });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ author: userId })
      .populate("author", "name")
      .sort({ createdAt: -1 });
    res.json({ success: true, posts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};