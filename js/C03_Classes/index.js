// 1. class = (ES6 feature) provides a more structured and cleaner way to
// work with objects compared to traditional constructor functions ex. static keyword, encapsulation, inheritance.

class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }
    calulateTotal(salesTax){
        return (this.price+(this.price*salesTax)).toFixed(2); //to display upto 2 decimal places.
    }
}
const salesTax=0.05;
const p1=new Product("Ball",10.99);
const p2=new Product("Bat",20.99);
p1.displayProduct();
console.log(`Total price(with tax):${p1.calulateTotal(salesTax)}`);
p2.displayProduct();
console.log(`Total price(with tax):${p2.calulateTotal(salesTax)}`);

// 2.static = keyword that defines properties or methods that belong
// to a class itself rather than the objects created from that class (class owns anything static, not the objects)
// Hence , you can acces any variable , function which is static with the help of constructor name itself.(no object can get static).