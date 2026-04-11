const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    title:{ //this will be the title of the blog post. It will be of type String and will be required.
        type:String,
        required:true,
    },
    body:{ //this will be the actual content of the blog post. It will be of type String and will be required.
        type:String,
        required:true,
    },
    likes:[{ //it will store the reference of the like model. It will be an array of ObjectIds that reference the Like model. This is because a post can have multiple likes.
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
    }],
    comments:[{ //it will store ref of the comment model. It will be an array of ObjectIds that reference the Comment model. This is because a post can have multiple comments.
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }]
})    