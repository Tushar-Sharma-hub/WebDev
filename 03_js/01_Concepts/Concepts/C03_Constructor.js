// constructor = special method for defining the
// properties and methods of objects
function Car(make,model,year,color){
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
    this.disp=function(){
        console.log(this.make);
        console.log(this.model);
        console.log(this.year);
        console.log(this.color);
    }
}
const car1=new Car("Ford","mustang",2024,"red");
car1.disp();