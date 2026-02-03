// Promise = An Object that manages asynchronous operations.
// Wrap a Promise Object around {asynchronous code}
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new Promise((resolve, reject) = {asynchronous code})
// DO THESE CHORES IN ORDER
// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

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
walkTheDog().then(value => {
    console.log(value);
    return cleanTheKitchen();
}).then(value => {
    console.log(value);
    return takeOutTheTrash();
}).then(value => {
    console.log(value);
    console.log('All chores done!');
}).catch(err => { //catch any rejects.
    console.error('Error:', err);
});