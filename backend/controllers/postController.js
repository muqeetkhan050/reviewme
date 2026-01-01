const post=require('../models/Post.js');


exports.createPost=async(req,res)=>{
    try{
        const postData=await post.create(req.body);
        res.status(201).json({
            success:true
        });

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

exports.getAllPosts=async(req,res)=>{
    try{
        const allpost=await post.find();
        res.status(200).json({
            success:true,

        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}


