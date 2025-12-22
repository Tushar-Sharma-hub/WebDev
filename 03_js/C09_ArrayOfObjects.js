const fruits=[
    {name:"apple",color:"red",cal:95},
    {name:"mango",color:"yellow",cal:107},
    {name:"coconut",color:"brown",cal:92},
    {name:"orange",color:"orange",cal:90},
]
//Push
fruits.push({name:"kiwi",color:"brown",cal:40});

//Display
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[0].name);

//Remove
// fruits.splice(1,2);
console.log(fruits);

//Display each.
fruits.forEach(fruit => console.log(fruit.name));

//Map()->Return a new array.
const fruitNames = fruits.map(fruit => fruit.name);
const fruitcolors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.cal);
console.log(fruitNames);
console.log(fruitcolors);
console.log(fruitCalories);

//Filter()->Return a new array,but with filtering that you need.
const orangeFruits = fruits.filter(fruit => fruit.color === "orange"); //all fruits with color orange.
const lowCalFruits = fruits.filter(fruit => fruit.cal < 100); 
const highCalFruits = fruits.filter(fruit => fruit.cal >= 100);
console.log(orangeFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

//Reduce()
const maxFruit = fruits.reduce( (max, fruit)=>fruit.cal > max.cal ? fruit: max);
const minFruit = fruits.reduce( (min, fruit)=>fruit.cal < min.cal ? fruit: min);
console.log(maxFruit); console.log(minFruit);