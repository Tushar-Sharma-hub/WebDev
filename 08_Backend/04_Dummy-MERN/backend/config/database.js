const mongoose=require("mongoose");

require('dotenv').config(); //environment variable ko use karne ke liye dotenv package ko import karna padta hai aur uske baad config function ko call karna padta hai.

const connectDB=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("Connection Established.")})
    .catch((error)=>{console.log("Error in Connection",error)})
}

module.exports=connectDB;