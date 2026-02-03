// Async/Await = Async = makes a function return a promise
// Await = makes an async function wait for a promise
// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

function walkTheDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = true; // Simulate success
            if (dogwalked) {
                resolve('Dog walked');
            } else {
                reject('Failed to walk the dog');
            }
        }, 1500);
    });
}
function cleanTheKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchernCleaned = true; // Simulate success
            if (kitchernCleaned) {
                resolve('Kitchen cleaned');
            } else {
                reject('Failed to clean the kitchen');
            }
        }, 2500);
    });
}
function takeOutTheTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = false; // Simulate success
            if (trashTakenOut) {
                resolve('Trash taken out');
            } else {
                reject('Failed to take out the trash');
            }
        }, 500);
    });
}
async function doChores() {
    try {
        const walkResult = await walkTheDog();
        console.log(walkResult);

        const cleanResult = await cleanTheKitchen();
        console.log(cleanResult);

        const trashResult = await takeOutTheTrash();
        console.log(trashResult);

        console.log('All chores done!');
    } catch (err) {
        console.error('Error:', err);
    }
}
doChores();