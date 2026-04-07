//Database connection file.Server se database ko connect karne ke liye is file me code likhenge.

const mongoose = require("mongoose"); //mongoose is used to connect our server to the database and perform operations on the database.
// It is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a higher-level abstraction for working with MongoDB, making it easier to define schemas, models, and perform CRUD operations.

require('dotenv').config(); //to use env variable we have to import dotenv package and call config function.

const connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL) //it returns a promise so we can use then and catch to handle success and error cases.
    .then(() => { console.log("Connection Established.") })
    .catch((error) => { console.log("Error in Connection", error) })
}

module.exports = connectDB; //to use this function in other files we have to export it.