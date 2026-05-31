const File=require("../model/file");

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