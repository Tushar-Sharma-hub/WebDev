// Callback hell in JavaScript is what happens when you nest too many callbacks inside each other to handle async operations. 
// The code starts drifting to the right, gets ugly, and becomes hard to read, debug, and maintain
// Here's an example of callback hell:

function fetchData(callback) {
    setTimeout(() => {
        callback(null, 'Data fetched');
    }, 1000);
}

function processData(data, callback) {
    setTimeout(() => {
        callback(null, `${data} processed`);
    }, 1000);
}

function saveData(data, callback) {
    setTimeout(() => {
        callback(null, `${data} saved`);
    }, 1000);
}

// Callback hell example
fetchData((err, data) => {
    if (err) {
        console.error(err);
    } else {
        processData(data, (err, processedData) => {
            if (err) {
                console.error(err);
            } else {
                saveData(processedData, (err, savedData) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(savedData);
                    }
                });
            }
        });
    }
});

// To avoid callback hell, you can use Promises or async/await syntax which makes the code more readable and maintainable.