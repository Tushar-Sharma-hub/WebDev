//import mangoose
const mongoose=require("mongoose");

//route handler
const commentSchema=new mongoose.Schema({
    post:{ //this will be the reference to the post for which the comment is being made. It will be of type ObjectId and will reference the Post model.
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:true,
    },
    user:{ //this will be the reference to the user who made the comment.
        type: String,
        required:true
    },
    body:{ //this will be the actual comment text. It will be of type String and will be required.
        type:String, 
        required:true,
    }
})

module.exports = mongoose.model("Comment",commentSchema)