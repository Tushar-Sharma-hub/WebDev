const mybutton=document.getElementById("press");
const mylabel=document.getElementById("mylabel");
const min=1;
const max=6;
let rnum;
mybutton.onclick=function(){
    rnum=Math.floor(Math.random()*max)+min;
    mylabel.textContent=rnum;
}