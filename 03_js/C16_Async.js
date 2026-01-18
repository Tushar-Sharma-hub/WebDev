// synchronous = Executes line by line consecutively in a sequential manner
// Code that waits for an operation to complete.
// asynchronous = Allows multiple operations to be performed concurrently without waiting
// Doesn't block the execution flow and allows the program to continuel
// (I/O operations, network requests, fetching data)
// Handled with: Callbacks, Promises, Async/Await
function func1(callback){
    setTimeout(()=>{
        console.log('Task 1 is done');
        callback();
    },2000);
}
function func2(){
    console.log('Task 2 is done');
    console.log('Task 3 is done');
    console.log('Task 4 is done');
}
func1(func2); // using callback