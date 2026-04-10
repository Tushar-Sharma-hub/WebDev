//toh isme route match karenge aur controller se function call karenge.

const express = require('express');
const router = express.Router(); //to create a router object which will be used to define routes for our application.

const {createTodo}=require("../controllers/createTodo"); //import the createTodo function from the controller file.
const {getTodos,getTodoById} = require("../controllers/getTodos"); //import the getTodos function from the controller file.
const {updateTodo} = require("../controllers/updateTodo"); //import the updateTodo function from the controller file.
const {deleteTodo} = require("../controllers/deleteTodo")

//ye saare routes app.use krke index.js me use krenge. app.use("/api/v1", todoRoutes); iska matlab hai ki jab bhi koi request /api/v1 se start hoti hai toh usko todoRoutes ke through handle karo.
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id",deleteTodo)

module.exports = router; //to use this router in other files we have to export it.