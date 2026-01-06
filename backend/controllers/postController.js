const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    try {
        const postData = await Post.create(req.body);
        const allPosts = await Post.find().sort({ createdAt: -1 });
        res.status(201).json({ success: true, posts: allPosts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find().populate("author", "name").sort({ createdAt: -1 });
        res.status(200).json({ success: true, posts: allPosts });
    } catch (error) {
        
        res.status(500).json({ success: false, message: error.message });
    }
};
