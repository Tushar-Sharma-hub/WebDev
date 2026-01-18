// Error = An Object that is created to represent a problem that occurs
// Occur often with user input or establishing a connection
// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
// ex. close files, close connections, release resources
try {
    let num = 0;
    if (isNaN(num)) {
        throw new Error("Input is not a valid number.");
    }
    if (num === 0) {
        throw new Error("Cannot divide by zero.");
    }
    let result = 100 / num;
    console.log(`100 divided by ${num} is ${result}`);
} catch (error) {
    console.error("An error occurred: " + error.message); //Error message is taken from thrown Error.
} finally {
    console.log("Execution completed. Thank you!");
}