// object = A collection of related properties and/or methods Can represent real world objects (people, products, places)
// object = {key: value,
// function ()}
// this = reference to the object where THIS is used
// (the object depends on the immediate context)
// person. name = this. name

const person1={
    firstName:"Tushar",
    lastName:"Sharma",
    age:19,
    isEmployed:false,
    sayhello: function(){console.log(`Hi lil bro i am ${this.firstName+' '+this.lastName}.`)},
    saybye: function(){console.log("Bye!!")},
}
const person2={
    firstName:"Hushar",
    secondName:"Sharma",
    age:22,
    isEmployed:true,
    sayhello: function(){console.log(`Hi lil bro i am ${this.firstName+' '+this.lastName}.`)},
    saybye: function(){console.log("Byeeee!!")},
}
person1.sayhello(); //acces object variables,function using dot operator.
person2.sayhello();