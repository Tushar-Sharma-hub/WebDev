const bcrypt=require("bcrypt");
const User=require("../model/userschema");
const jwt=require("jsonwebtoken");

//signup controller
exports.signup=async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;
        //check if user already exists
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        //Secure the password using bcrypt
        let hashedPassword;
        try{
            hashedPassword=await bcrypt.hash(password,10); //param1:password, param2:salt rounds
        }
        catch(error){
            return res.status(500).json({message:"Error occurred while hashing the password"});
        }
        //Create a new user
        const newUser=await User.create({
            name,
            email,
            password:hashedPassword,
            role
            
        });
        res.status(201).json({message:"User created successfully",user:newUser});
    }
    catch(error){
        res.status(500).json({message:"Error occurred during signup",error:error.message});
    }
}

//login controller
exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        //Find the user by email
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid email or password"});
        }
        //Verify password and generate a jwt token
        const payload={ //payload to be included in the token
            email:user.email,
            id:user._id,
            role:user.role
        };
        if(await bcrypt.compare(password,user.password)){
            let token=jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h"
            });
            user.token=token; //to include the token in the response
            user.password=undefined; //to hide the password in the response
            const option={
                expires:new Date(Date.now()+2*60*60*1000), //2 hours
                httpOnly:true
            }
            res.cookie("token",token,option).status(200).json({message:"Login successful",user:user,token:token});
        }
        else{
            res.status(400).json({message:"Invalid email or password"});
        }
    }
    catch(error){
        res.status(500).json({message:"Error occurred during login",error:error.message});
    }
}