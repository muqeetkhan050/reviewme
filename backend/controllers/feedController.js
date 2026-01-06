const Post=require('../models/Post');

exports.loadFeed=async(req,res)=>{
    try{
        const posts=await Post.find().populate("author", "username").sort({createdAt:-1});
        res.status(200).json({success:true,posts});
    }catch(error){
        res.status(500).json({success:false,message:error.message});
    }
}