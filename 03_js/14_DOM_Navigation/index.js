// DOM Navigation = The process of navigating through the structure
// of an HTML document using JavaScript.
// • firstElementChild
// • lastElementchild
// • nextElementSibling
// • previousElementSibling
// • parentElement
// • children

// • firstElementChild
const element=document.getElementById("fruits");
const firstchild=element.firstElementChild;
firstchild.style.backgroundColor="yellow";

// • firstElementChild
const element1=document.getElementById("fruits");
const lastchild=element1.lastElementChild;
lastchild.style.backgroundColor="lightblue";

//Using queryselector (nodelist) build in foreach method
const ulelements=document.querySelectorAll("ul");
ulelements.forEach(ulelement=>{
    const lastchildul=ulelement.lastElementChild;
    lastchildul.style.backgroundColor="lightgreen";
});

// • nextElementSibling
const e2=document.getElementById("apple"); //for fruits it will highlight vegetable cuz it's it sibling.
const next=e2.nextElementSibling;
next.style.backgroundColor="gold";

// • previousElementSibling
const e3 = document.getElementById("banana");
const prev = e3.previousElementSibling;
prev.style.backgroundColor = "pink";


// • parentElement
const apple = document.getElementById("apple");
const parent = apple.parentElement;
parent.style.border = "2px solid red";


// • children
const fruits = document.getElementById("fruits");
const children = fruits.children;

// children is an HTMLCollection → loop using for...of
for (let child of children) {
    child.style.fontWeight = "bold";
}

// Extra: styling all children using index
children[0].style.color = "red";     // apple
children[1].style.color = "orange";  // orange
children[2].style.color = "yellow";  // banana