const PI=3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick=function(){
    radius=document.getElementById("myRadius").value;
    circumference=2*PI*radius;
    document.getElementById("myResult").textContent=`Circumference is ${circumference}`;
}