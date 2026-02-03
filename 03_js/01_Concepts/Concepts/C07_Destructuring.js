// destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring
// 5 examples

//Eg1-Swap the value of two variables.
let a=1;
let b=2;
console.log(a,b);
[a,b]=[b,a];
console.log(a,b);

//Eg2-Swap 2 elements in the array.
const color=["green","blue","skyblue","red"];
console.log(color);
[color[0],color[3]]=[color[3],color[0]];
console.log(color);

//Eg3-Assign array elements to variables.
const [firstcolor,secclor,... extracolors]=color;
console.log(firstcolor);
console.log(secclor);
console.log(extracolors);

//Eg4-Extract values from the objects.
const person={
    fn:"tushar",
    ln:"sharma",
    age:30,
}
const {fn,ln,age}=person; //Use {} for object.
console.log(fn);