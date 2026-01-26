// eventListener = Listen for specific events to create interactive web pages
// events: click, mouseover, mouseout
// • addEventListener(event, callback);
const mybox=document.getElementById("mybox");
const mybutton=document.getElementById("myButton");
function changecolor(event){
    mybox.style.backgroundColor="tomato";
    mybox.textContent="Aaahh";
}
function changeShade(event){
    mybox.style.backgroundColor="yellow";
    mybox.textContent="Don't do it";
}
function changeOriginal(event){
    mybox.style.backgroundColor="lightgreen";
    mybox.textContent="Click me";
}
mybutton.addEventListener("click",changecolor);
mybutton.addEventListener("mouseover",changeShade);
mybutton.addEventListener("mouseout",changeOriginal);
