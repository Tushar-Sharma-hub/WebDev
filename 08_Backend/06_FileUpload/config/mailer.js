const nodemailer = require("nodemailer");
require("dotenv").config();

exports.transporter = async () => {
    try{
        return nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });
    } catch (error) {
        console.error("Error creating transporter", error);
        throw error; // Rethrow the error to be handled by the caller
    }
}