const mongoose = require("mongoose");

//name,tags,email,imageUrl
const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tags: {
        type: String
    },
    email: {
        type: String
    },
    imageUrl: {
        type: String,
    }
}) 

module.exports = mongoose.model("File", fileSchema);