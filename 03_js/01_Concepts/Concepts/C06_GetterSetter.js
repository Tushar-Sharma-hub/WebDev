// getter = special method that makes a property readable
// setter = special method that makes a property writeable
// validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    set width(newWidth){
        if(newWidth>0){
            this._width=newWidth; //_width means it's private property now can't change it.
        }
        else{
            console.error("Width can't be negative.");
        }
    }
    set height(newHeight){
        if(newHeight>0){
            this._height=newHeight;
        }
        else{
            console.error("Height can't be negative.");
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }

    get area(){

    }
}
const rectangle=new Rectangle(3,4);
rectangle.width=-1000; //set() will validate and set it accordingly,here it wil give error.
rectangle.height="scw";
console.log(rectangle.width); //get() will get the value if assigned,o/w error through set method.
console.log(rectangle.height);