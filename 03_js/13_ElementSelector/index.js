// element selectors = Methods used to target and manipulate HTML eLements
// They allow you to select one or multiple HTML elements from the DOM (Document Object Model)
// 1. document. getElementById() // ELEMENT OR NULL
// 2. document.getElementsClassName() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document. querySelector ()   // ELEMENT OR NULL
// 5. document. querySelectorAll() // NODELIST

const msg=document.getElementById("heading-msg");
msg.style.backgroundColor="blue";
msg.style.color="white";
console.log(msg); //You can check this in console to see what we are working with.

