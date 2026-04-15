//import model
const Post=require("../models/postModel");

exports.createPost=async(req,res) => {
    try{
        const {title,body}=req.body;
        const post=new Post({
            title,body
        });
        const savedPost=await post.save();
        console.log(savedPost);
        res.json({
            message:"Post created successfully",
            post:savedPost,
        })
    }
    catch(error){
        return res.status(500).json({
            message:"Internal Server Error",
        })
    }
}

exports.getAllPosts=async(req,res) => {
    try{
        const posts=await Post.find().populate("comments").populate("likes").exec(); //populate comments and likes in the post
        res.json({
            message:"Posts fetched successfully",
            posts,
        })
    }
    catch(error){
        return res.status(500).json({
            message:"Internal Server Error",
        })
    }
}