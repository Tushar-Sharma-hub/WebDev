//auth,isStudent,isAdmin middleware

const jwt=require("jsonwebtoken");
require("dotenv").config();

exports.auth=(req,res,next)=>{
    try{
        const token = req.body.token || req.cookies.token || req.headers["Authorization"].replace("Bearer ",""); //to extract the token from the request header
        if(!token){
            return res.status(401).json({message:"Access denied. No token provided."});
        }
        try{
            const payload=jwt.verify(token,process.env.JWT_SECRET); //this will decode the token and verify its validity using the secret key
            console.log("Decoded token:", payload); //to check the decoded token
            req.user=payload; //to access the user information in the next middleware or route handler
        }catch(error){
            return res.status(401).json({message:"Invalid token"});
        }
        next();
    }catch(error){
        res.status(500).json({message:"Error occurred during authentication",error:error.message});
    }
}

exports.isStudent=(req,res,next)=>{
    try{
        if(req.user.role!=="Student"){
            return res.status(403).json({message:"Access denied. Only students are allowed."});
        }
        next();
    }catch(error){
        res.status(500).json({message:"Error occurred while checking student role",error:error.message});
    }
}

exports.isAdmin=(req,res,next)=>{
    try{
        if(req.user.role!=="Admin"){
            return res.status(403).json({message:"Access denied. Only admins are allowed."});
        }
        next();
    }catch(error){
        res.status(500).json({message:"Error occurred while checking admin role",error:error.message});
    }
}