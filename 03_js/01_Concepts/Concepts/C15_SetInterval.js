// Think of setInterval like setting an alarm:
// setInterval() → sets the alarm
// ID → alarm number
// clearInterval(ID) → turns off that exact alarm

let count = 1;

// setInterval returns an ID
let intervalId = setInterval(() => {

    console.log("Count:", count);
    count++;

    if (count > 5) {
        clearInterval(intervalId); // use the ID to stop the interval
        console.log("Interval stopped");
    }

}, 1000);
