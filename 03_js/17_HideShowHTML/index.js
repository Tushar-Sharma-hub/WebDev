const mybutton=document.getElementById("myButton");
const myimg=document.getElementById("myImg");
mybutton.addEventListener("click",event=>{
    if(myimg.style.display === "none"){ //we can also use .visibility o hidden or visible.
        myimg.style.display="block";
        mybutton.textContent="Hide";
    }
    else{myimg.style.display="none";
    mybutton.textContent="Show";}
});