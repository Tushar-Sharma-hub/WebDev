//Counter program.
const decbtn=document.getElementById("decrease");
const resetbtn=document.getElementById("reset");
const incbtn=document.getElementById("increase");
const count=document.getElementById("count");
let counting=0;
decbtn.onclick=function(){
    counting--;
    document.getElementById("count").textContent=counting;
}
incbtn.onclick=function(){
    counting++;
    document.getElementById("count").textContent=counting;
}
resetbtn.onclick=function(){
    counting=0
    document.getElementById("count").textContent=counting;
}