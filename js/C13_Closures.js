//A closure is when a function remembers variables from its outer lexical scope, 
// even after the outer function has finished execution.
function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
// outer() runs once
// inner() is returned
// Even after outer() finishes,
// inner() remembers count
// This “remembering” is called a closure