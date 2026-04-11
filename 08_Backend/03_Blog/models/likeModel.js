const mongoose=require("mongoose");

const likeSchema=new mongoose.Schema({
    post:{ //this will be the reference to the post for which the like is being made. It will be of type ObjectId and will reference the Post model.
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:true,
    },
    user:{ //this will be the reference to the user who made the like.
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("Like",likeSchema);