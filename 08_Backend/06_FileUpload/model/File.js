const mongoose = require("mongoose");
const { transporter } = require("../config/mailer"); //importing the transporter object from mailer.js

//name,tags,email,imageUrl
const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tags: {
        type: String
    },
    email: {
        type: String
    },
    imageUrl: {
        type: String,
    }
}) 

fileSchema.post("save", async function (doc){ //save is use doc is the entry that is being saved in the database
    try{
        //send mail
        const mailTransporter = await transporter(); //create a transporter instance using the transporter function from mailer.js
        await mailTransporter.sendMail({
            from: "File Upload Service ",
            to: doc.email,
            subject: "File Uploaded Successfully",
            text: `Your file ${doc.name} has been uploaded successfully. You can access it here: ${doc.imageUrl}`
        });
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }
});

module.exports = mongoose.model("File", fileSchema);