const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 4000;


//Middleware
app.use(express.json()); //to parse the incoming JSON data in the request body and make it available in the req.body object. This is essential for handling API requests that send data in JSON format, allowing us to easily access and manipulate that data in our route handlers.
const fileUpload=require("express-fileupload");
app.use(fileUpload({
    useTempFiles:true, //to use temporary files instead of memory for storing uploaded files. This is useful for handling large file uploads without consuming too much memory.
}));

//Database connection and cloudinary configuration
require("./config/database").connectDB();
require("./config/claudinary").cloudinaryConfig();

//route import and mount
const file=require("./routes/FileUpload");
app.use("/api/v1/upload",file);

//activate
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});