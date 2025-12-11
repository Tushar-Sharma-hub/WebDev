const numbers = [1, 2, 3, 4, 5];

// forEach with callback
numbers.forEach(function(n) {
    console.log("forEach:", n);
});

// map with callback (must return value)
const doubled = numbers.map(function(n) {
    return n * 2;
});
console.log("map:", doubled);

// filter with callback (must return true/false)
const evens = numbers.filter(function(n) {
    return n % 2 === 0;
});
console.log("filter:", evens);

// reduce with callback (accumulator, currentValue)
const sum = numbers.reduce(function(acc, curr) {
    return acc + curr;
}, 0);
console.log("reduce:", sum);

/*
OUTPUT:
forEach: 1
forEach: 2
forEach: 3
forEach: 4
forEach: 5

map: [2, 4, 6, 8, 10]
filter: [2, 4]
reduce: 15
*/
