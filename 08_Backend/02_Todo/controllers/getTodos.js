
const Todo=require("../models/todo"); //import the Todo model to interact with the database.

exports.getTodos = async(req,res) => {
    try {
        //fetch all 
        const todos=await Todo.find({}); //fetch all the todos from the database using the find method of the Todo model.
        //send a json response with a success flag and the data
        res.status(200).json({
            success:true,
            data:todos,
            message:'Todos fetched successfully',
        })
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}

exports.getTodoById = async(req,res) => {
    try{
        const id=req.params.id; //fetching id from the request parameters. When a GET request is made to /getTodos/:id, the id will be available in req.params.id.
        const todo=await Todo.findById({_id: id})//checking id which is equal.

        //given id is wrong
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data Found with given id.",
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:'Todos fetched successfully',
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}