const mongoose=require('mongoose');
require("dotenv").config();

exports.connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((error)=>{
        console.error("Error connecting to MongoDB",error);
        process.exit(1); //to exit the process with failure code
    });
}