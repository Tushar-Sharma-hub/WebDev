const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 4000;

//Cookie parse is used to parse the cookies from the request header and make it available in the req.cookies object. 
//This is useful for handling authentication tokens stored in cookies, allowing us to easily access and verify them in our middleware and route handlers.
const cookieparser=require("cookie-parser");
app.use(cookieparser());

app.use(express.json());

require("./config/database").connectDB();

//route import and mount
const user=require("./routes/user");
app.use("/api/v1",user);

//activate
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});