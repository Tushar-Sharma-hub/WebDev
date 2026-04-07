//isme schema define krenge ki todo me kya kya fields honge aur unka type kya hoga. Ye schema mongoose ke through banega.
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100,
    },
    description: {
        type: String,
        required: true,
        maxLength: 500,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now, //default value will be current date and time when a new todo is created.
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now, //default value will be current date and time when a new todo is created.
    }
})

module.exports = mongoose.model("Todo", todoSchema); //to use this model in other files we have to export it.