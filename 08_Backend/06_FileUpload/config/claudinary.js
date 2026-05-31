const cloudinary = require('cloudinary').v2;
require("dotenv").config();

exports.cloudinaryConfig = () => {
    try{
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });
        console.log("Cloudinary configured successfully");
    } catch (error) {
        console.error("Error configuring Cloudinary", error);
        process.exit(1); // Exit the process with failure code
    }
}