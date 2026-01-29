// setTimeout() does not block execution
// Delay is minimum, not guaranteed exact
// Uses Web APIs + event loop

setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);
// Runs the function after 2000 ms (2 seconds)
// Non-blocking → JS keeps running other code
// Returns a timer ID

const id = setTimeout(() => {
    console.log("This will not run");
}, 3000);
clearTimeout(id);