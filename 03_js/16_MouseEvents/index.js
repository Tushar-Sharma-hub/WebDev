// eventListener = Listen for specific events to create interactive web pages
// events: click, mouseover, mouseout, keydown, keyup
// addEventListener(event, callback);

const mybox = document.getElementById("mybox");
const mybutton = document.getElementById("myButton");

function changecolor(event){
    mybox.style.backgroundColor = "tomato";
    mybox.textContent = "Aaahh";
}

function changeShade(event){
    mybox.style.backgroundColor = "yellow";
    mybox.textContent = "Don't do it";
}

function changeOriginal(event){
    mybox.style.backgroundColor = "lightgreen";
    mybox.textContent = "Click me";
}

// Mouse events
mybutton.addEventListener("click", changecolor);
mybutton.addEventListener("mouseover", changeShade);
mybutton.addEventListener("mouseout", changeOriginal);

// Keyboard events
document.addEventListener("keydown", function(event){ //pressing key.
    mybox.style.backgroundColor = "skyblue";
    mybox.textContent = `Key Down: ${event.key}`;
});

document.addEventListener("keyup", function(event){ //releasing key.
    mybox.style.backgroundColor = "lightgreen";
    mybox.textContent = `Key Up: ${event.key}`;
});
