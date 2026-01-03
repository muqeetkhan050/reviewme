// // const post=require('../models/Post');


// // exports.createPost=async(req,res)=>{
// //     try{
// //         const postData=await post.create(req.body);
// //         res.status(201).json({
// //             success:true
// //         });

// //     }catch(error){
// //         res.status(500).json({
// //             success:false,
// //             message:error.message
// //         });
// //     }
// // }

// // exports.getAllPosts=async(req,res)=>{
// //     try{
// //         const allpost=await post.find();
// //         res.status(200).json({
// //             success:true,

// //         });
// //     }catch(error){
// //         res.status(500).json({
// //             success:false,
// //             message:error.message
// //         });
// //     }
// // }




// const Post = require('../models/Post'); // ✅ Capital P

// // exports.createPost = async (req, res) => {
// //   try {
// //     const postData = await Post.create(req.body); // ✅ Use Post
// //     res.status(201).json({
// //       success: true,
// //       post: postData,
// //     });
// //   } catch (error) {
// //     console.error(error); // 🔥 always log
// //     res.status(500).json({
// //       success: false,
// //       message: error.message,
// //     });
// //   }
// // };

// const Post = require('../models/Post');

// exports.createPost = async (req, res) => {
//   try {
//     console.log("📥 BODY:", req.body);

//     if (!req.body || Object.keys(req.body).length === 0) {
//       throw new Error("Request body is empty");
//     }

//     const post = await Post.create({
//       title: req.body.title,
//       content: req.body.content
//     });

//     console.log("✅ SAVED:", post);

//     res.status(201).json({
//       success: true,
//       post
//     });
//   } catch (error) {
//     console.error("❌ CREATE POST ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };


// exports.getAllPosts = async (req, res) => {
//   try {
//     const allPosts = await Post.find();
//     res.status(200).json({
//       success: true,
//       posts: allPosts,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };




const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    console.log("📥 BODY RECEIVED:", req.body);

    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required"
      });
    }

    const post = await Post.create({ title, content });

    console.log("✅ POST SAVED:", post);

    res.status(201).json({ success: true, post });
  } catch (error) {
    console.error("❌ CREATE POST ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      posts
    });
  } catch (error) {
    console.error("❌ GET POSTS ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
