let num=[1,10,9,8,3,2,5,6];
num.sort(); //It will take numbers in num as string sort accordingly so 1,10,2,3...
console.log(num);
num.sort((a,b)=>a-b);
console.log(num);
num.sort((a,b)=>b-a);
console.log(num);
const people=[
    {name:"Tushar",age:30,gpa:3},
    {name:"Raj",age:33,gpa:3.4},
    {name:"Sid",age:32,gpa:3.9},
]
people.sort((a,b)=> a.age-b.age);
console.log(people);