
const Todo=require("../models/todo"); //import the Todo model to interact with the database.

exports.deleteTodo = async(req,res) => {
    try {
        const {id}=req.params;
        await Todo.findByIdAndDelete(id);
        res.json({
            success:true,
            message:'Todo deleted successfully',
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