const express = require('express');
const router = express.Router();

//Import Controllers
const {createComment}=require("../controllers/commentController");
const {createPost}=require("../controllers/postConroller");
const {getAllPosts}=require("../controllers/postConroller");
const {createLike}=require("../controllers/likeConroller");
const {unlike}=require("../controllers/likeConroller");

//Mapping Create
router.post("/comment/create",createComment);
router.post("/post/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",createLike);
router.post("/likes/unlike",unlike);

//Export Router
module.exports=router;