const textBox=document.getElementById("textbox");
const tof=document.getElementById("toF");
const toc=document.getElementById("toC");
const result=document.getElementById("result");
let temp;
function convert(){
    if(tof.checked){
        temp=Number(textBox.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+"°F"
    }
    else if(toc.checked){
        temp=Number(textBox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"°C"
    }
    else{
        result.textContent="Please select a unit.";
    }
}