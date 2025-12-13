// 1.inheritance = allows a new class to inherit properties and methods
// from an existing class (parent -> child)
// helps with code reusability
class Animal {
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(this.name + " is eating");
    }
}

class Rabbit extends Animal {
    constructor(name){
        super(name);
    }

    run(){
        console.log(this.name + " is running");
    }
}

class Fish extends Animal {
    constructor(name){
        super(name);
    }

    swim(){
        console.log(this.name + " is swimming");
    }
}

class Hawk extends Animal {
    constructor(name){
        super(name);
    }

    fly(){
        console.log(this.name + " is flying");
    }
}

const rabbit = new Rabbit("Rabbit");
const fish = new Fish("Fish");
const hawk = new Hawk("Hawk");

rabbit.eat();
rabbit.run();

fish.eat();
fish.swim();

hawk.eat();
hawk.fly();
// 2.super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
// this = this object
// super = the parent