//import model
const {Post}=require("../models/postModel");
const {Comment}=require("../models/commentModel");

exports.createComment=async(req,res) => {
    try{
        const {post,user,body}=req.body; //post->post id in which user commented, user->id of user who commented, body->comment content.
        const comment=new Comment({
            post,user,body
        });
        const savedComment=await comment.save();
        
        //find the post by id and add it in postmodel commetn array.
        const updatePost=await Post.findByIdAndUpdate(post,{$push:{comments: savedComment._id}},{new:true})//(post id to be updated,push id in comments array,it will show the updated output)
                            .populate("comments")
        //Populate Replaces a "Reference ID" with the actual document from another collection (like a SQL Join) 
        res.json({
            message:"Comment created successfully",
            post:updatePost,
        })
    }
    catch(error){
        return res.status(500).json({
            message:"Internal Server Error",
        })
    }
}