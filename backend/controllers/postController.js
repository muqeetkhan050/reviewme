

// const Post = require('../models/Post');

// exports.createPost = async (req, res) => {
//   try {
//     console.log("📥 BODY RECEIVED:", req.body);

//     const { title, content } = req.body;

//     if (!title || !content) {
//       return res.status(400).json({
//         success: false,
//         message: "Title and content are required"
//       });
//     }

//     const post = await Post.create({ title, content });

//     console.log("✅ POST SAVED:", post);

//     res.status(201).json({ success: true, post: allposts });
//   } catch (error) {
//     console.error("❌ CREATE POST ERROR:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };


// exports.getAllPosts = async (req, res) => {
//   try {
//     const posts = await Post.find().sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       posts
//     });
//   } catch (error) {
//     console.error("❌ GET POSTS ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

const Post = require('../models/Post');

// CREATE POST
exports.createPost = async (req, res) => {
  try {
    const postData = await Post.create(req.body);

    console.log("📥 BODY RECEIVED:", req.body);
    console.log("✅ POST SAVED:", postData);

    // After saving, fetch all posts to send back to frontend
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
