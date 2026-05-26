const express=require("express");
const cors=require("cors");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 4000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());

require("./config/database").connectDB();

//route import and mount
const user=require("./routes/user");
app.use("/api/v1",user);

//activate
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});