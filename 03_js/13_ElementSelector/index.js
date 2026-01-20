// element selectors = Methods used to target and manipulate HTML eLements
// They allow you to select one or multiple HTML elements from the DOM (Document Object Model)
// 1. document. getElementById() // ELEMENT OR NULL
// 2. document.getElementsClassName() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document. querySelector ()   // FIRST ELEMENT OR NULL
// 5. document. querySelectorAll() // NODELIST

// 1. document. getElementById() // ELEMENT OR NULL
const msg=document.getElementById("heading-msg");
msg.style.backgroundColor="blue";
msg.style.color="white";
console.log(msg); //You can check this in console to see what we are working with.

// 2. document.getElementsClassName() // HTML COLLECTION
const fruits=document.getElementsByClassName("fruits");//All id named fruits will get stored in fruits const which we can access by indexing.
fruits[0].style.backgroundColor="yellow";
fruits[1].style.backgroundColor="green";
fruits[2].style.backgroundColor="gold";

Array.from(fruits).forEach(fruit=>{ //Typecasting it to array.
    fruit.style.backgroundColor="yellow";
});

// 3. document.getElementsByTagName() // HTML COLLECTION
const h4elements=document.getElementsByTagName("h4");
const lielements=document.getElementsByTagName("li");
for(let h4element of h4elements){
    h4element.style.backgroundColor="grey";
}
for(let lielement of lielements){
    lielement.style.backgroundColor="lightgreen";
}
//We can also use typecasting.

// 4. document. querySelector ()   // FIRST ELEMENT OR NULL
const element=document.querySelector("li"); //It will take first element.
element.style.backgroundColor="yellow";

// 5. document. querySelectorAll() // NODELIST
const foods=document.querySelectorAll("li");
foods.forEach(element => {
    element.style.backgroundColor="darkgreen"
});