//Used when sending data to a server
const user = {
  name: "Tushar",
  age: 20
};

const jsonData = JSON.stringify(user); //Converts JavaScript object to JSON string
console.log(jsonData);
//Sending jsonData to server (simulated here with a console log)

//Used when receiving data from a server
const jsonData1 = '{"name":"Tushar","age":20}';

const obj = JSON.parse(jsonData1);
console.log(obj.name); // Accessing the name property from the parsed object
console.log(obj.age);  // Accessing the age property from the parsed object
//Using obj in the application