const File=require("../model/file");
const cloudinary=require("cloudinary").v2;

function supportFormat(fileFormat,supportFormats){
    return supportFormats.includes(fileFormat);
}

async function uploadToCloudinary(file,folder,quality){
    const options={
        folder:folder, //folder name in cloudinary where the file will be uploaded
        resource_type:"auto" //to automatically detect the type of file and upload it accordingly. This is useful for handling different types of files without having to specify the resource type explicitly.
    }
    if(quality){
        options.quality=quality; //to specify the quality of the uploaded file. This is useful for reducing the size of the uploaded file without compromising much on the quality, especially for images and videos.
    }
    return await cloudinary.uploader.upload(file.tempFilePath,options); //tempfilePath is the path where the file is temporarily stored before uploading to cloudinary.=
}

//local file upload
exports.localFileUpload=async(req,res)=>{
    try{
        const file=req.files.file; //file is the name of the input field in the form frontend
        console.log("File is here :",file);
        let path=__dirname+"/files/"+Date.now()+"."+file.name.split(".")[1]; //path where the file will be uploaded

        file.mv(path,(err)=>{
            console.log(err);
        });
        res.json({message:"File uploaded successfully",path:path});
    } catch (error) {
        console.error("Error uploading file", error);
        res.status(500).json({message:"Error uploading file"});
    }
}

//image upload to cloudinary

exports.imageUpload=async(req,res)=>{
    try{
        //Get data from request
        const {name,tags,email}=req.body;
        const file=req.files.imageFile;
        console.log("File is here :",file);

        //Validation
        const supportFormats=["jpg","jpeg","png"];
        const fileFormat=file.name.split(".")[1].toLowerCase();
        console.log("File format is",fileFormat);

        if(!supportFormat(fileFormat,supportFormats)){
            return res.status(400).json({message:"File format not supported"});
        }

        //Upload to cloudinary
        const response=await uploadToCloudinary(file,"Codehelp"); //we have made a folder in cloudinary named codehelp and the file will be uploaded to that folder
        console.log("Response from cloudinary",response); //by checking the response from cloudinary we can get the secure url of the image which we will store in the database
        //Create a new file document in the database
        const fileData=await File.create({
            name:name,
            tags:tags,
            email:email,
            imageUrl:response.secure_url //we will store the secure url of the image in the database
        });
        res.json({message:"File uploaded successfully"});
    } catch (error) {
        console.error("Error uploading file", error);
        res.status(500).json({message:"Error uploading file"});
    }
}

//video upload to cloudinary
exports.videoUpload=async(req,res)=>{
    try{
        //Get data from request
        const {name,tags,email}=req.body;
        const file=req.files.videoFile;
        console.log("File is here :",file);
        //Validation
        const supportFormats=["mp4","mkv"];
        console.log("File name is",file.name);
        const fileFormat=file.name.split(".")[1].toLowerCase();
        console.log("File format is",fileFormat);
        if(!supportFormat(fileFormat,supportFormats)){
            return res.status(400).json({message:"File format not supported"});
        }
        //File should be less than 500mb
        if(file.size>500*1024*1024){
            return res.status(400).json({message:"File size should be less than 500mb"});
        }
        //Upload to cloudinary
        const response=await uploadToCloudinary(file,"Codehelp"); //we have made a folder in cloudinary named codehelpVideos and the file will be uploaded to that folder
        console.log("Response from cloudinary",response); //by checking the response from cloudinary we can get the secure url of the video which we will store in the database
        //Create a new file document in the database
        const fileData=await File.create({
            name:name,
            tags:tags,
            email:email,
            imageUrl:response.secure_url //we will store the secure url of the video in the database
        });
        res.json({message:"File uploaded successfully"});
    } catch (error) {
        console.error("Error uploading file", error);
        res.status(500).json({message:"Error uploading file"});
    }
}

//imagSizeReducer
exports.imageSizeReducer=async(req,res)=>{
    try{
        const {name,tags,email}=req.body;
        const file=req.files.imageFile;
        console.log("File is here :",file);
        //Validation
        const supportFormats=["jpg","jpeg","png"];
        const fileFormat=file.name.split(".")[1].toLowerCase();
        console.log("File format is",fileFormat);
        if(!supportFormat(fileFormat,supportFormats)){
            return res.status(400).json({message:"File format not supported"});
        }
        //Upload to cloudinary with quality parameter to reduce the size of the image
        const response=await uploadToCloudinary(file,"Codehelp",30);
        console.log("Response from cloudinary",response); //by checking the response from cloudinary we can get the secure url of the image which we will store in the database
        
        const fileData=await File.create({
            name:name,
            tags:tags,
            email:email,
            imageUrl:response.secure_url //we will store the secure url of the image in the database
        });
        res.json({message:"Image uploaded and size reduced successfully"});
    }catch (error) {
        console.error("Error reducing image size", error);
        res.status(500).json({message:"Error reducing image size"});
    } 
}   