
//Sever Initiate
const express=require('express');
const app=express();

const bodyParser=require('body-parser');
//Middleware
app.use(bodyParser.json()); //bodyparser se data ko json me convert karenge.


//activate server at 3000 port.
app.listen(3000,()=>{
    console.log("Server Started at Port no. 3000.")
});

//Routes
app.get('/',(request,response)=>{ // when you come at '/' this path you will get response.
    response.send("Yooo , ky haal h"); //respqonse se data bhejenge.
})

//Postman se testing.
app.post('/api/cars',(request,response)=>{ //postman se data bhejne ke liye post request karenge.
    const {name,brand}=request.body; //request se data lenge
    console.log(name)
    console.log(brand)
    response.send("Car added.")
})


//To connect server to database.
const mongoose=require('mongoose')
//agr 27017/ ke baad jo name humne likha h voo database ni h toh bn jayga ni toh jo phele se h voo use ho jayga.
mongoose.connect("mongodb://localhost:27017/myDatabase")
.then(()=>{console.log("Connection Stablished.")})
.catch((error)=>{console.log("Error in Connection",error)})