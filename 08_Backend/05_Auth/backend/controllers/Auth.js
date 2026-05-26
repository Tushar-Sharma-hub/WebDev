const bcrypt=require("bcrypt");
const User=require("../model/userschema");

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
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid email or password"});
        }
        //Compare the provided password with the hashed password
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid email or password"});
        }
        res.status(200).json({message:"Login successful",user});
    }
    catch(error){
        res.status(500).json({message:"Error occurred during login",error:error.message});
    }
}