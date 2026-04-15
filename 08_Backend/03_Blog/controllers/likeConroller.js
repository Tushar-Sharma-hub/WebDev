const Post=require("../models/postModel");
const Like=require("../models/likeModel");

exports.createLike=async(req,res) => {
    try{
        const {post,user}=req.body; //post->post id in which user liked, user->id of user who liked.
        const like=new Like({
            post,user
        });
        const savedLike=await like.save();
        
        //find the post by id and add it in postmodel like array.
        const updatePost=await Post.findByIdAndUpdate(post,{$push:{likes: savedLike._id}},{new:true})//(post id to be updated,push id in likes array,it will show the updated output)
                            .populate("likes")
        //Populate Replaces a "Reference ID" with the actual document from another collection (like a SQL Join) 
        res.json({
            message:"Like created successfully",
            post:updatePost,
        })
    }
    catch(error){
        return res.status(500).json({
            message:"Internal Server Error",
        })
    }
}

exports.unlike=async(req,res) => {
    try{
        const {post,like}=req.body; //post->post id in which user unliked, user->id of user who unliked.
        //find the like by id and delete it.
        const deletedLike=await Like.findByIdAndDelete(like);
        
        //find the post by id and remove it from postmodel like array.
        const updatePost=await Post.findByIdAndUpdate(post,{$pull:{likes: like}},{new:true})//(post id to be updated,pull id from likes array,it will show the updated output)
                            .populate("likes")
        //Populate Replaces a "Reference ID" with the actual document from another collection (like a SQL Join) 
        res.json({
            message:"Like removed successfully",
            post:updatePost,
        })
    }
    catch(error){
        return res.status(500).json({
            message:"Internal Server Error",
        })
    }
}