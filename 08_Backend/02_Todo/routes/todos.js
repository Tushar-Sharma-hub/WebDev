//toh isme route match karenge aur controller se function call karenge.

const express = require('express');
const router = express.Router(); //to create a router object which will be used to define routes for our application.

const {createTodo}=require("../controllers/createTodo"); //import the createTodo function from the controller file.

router.post("/createTodo", createTodo); //define a route for creating a new todo. When a POST request is made to /createTodo, the createTodo function will be called.

module.exports = router; //to use this router in other files we have to export it.