//---- EXAMPLE 1 < h1> ---
// STEP 1 CREATE THE ELEMENT
const newH1 = document. createElement ("h1");
// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color="red";
newH1.style.textAlign="center";
// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newH1); //to be the last child.
document.body.prepend(newH1); //to be the first child.
// document.getElementById("box1").append(newH1); //to put it in inside the box.
// REMOVE HTML ELEMENT
document.body.removeChild(newH1);