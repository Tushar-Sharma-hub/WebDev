const choices=["rock","paper","scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerscoreDisplay=document.getElementById("playerScoredDisplay");
const computerscoreDisplay=document.getElementById("computerScoredDisplay");
let playerScore=0;
let computerScore=0;

function playgame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";
    
    if(playerChoice===computerChoice){
        result="It's a Draw!";
    }
    else{
        switch(playerChoice){
            case "rock":
                if(computerChoice==="scissors"){
                    result="You Win!";
                }
                else{
                    result="You Lose!";
                }
                break;
            case "paper":
                if(computerChoice==="rock"){
                    result="You Win!";
                }
                else{
                    result="You Lose!";
                }
                break;
            case "scissors":
                if(computerChoice==="paper"){
                    result="You Win!";
                }
                else{
                    result="You Lose!";
                }
                break; 
        }
    }
    playerDisplay.textContent=`PLAYER: ${playerChoice}`;
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`;
    resultDisplay.textContent=result;
    switch(result){
        case "You Win!":
            resultDisplay.style.color="green";
            playerScore++;
            playerscoreDisplay.style.color="green";
            playerscoreDisplay.textContent=playerScore;
            break;
        case "You Lose!":
            resultDisplay.style.color="red";
            computerScore++;
            computerscoreDisplay.style.color="red";
            computerscoreDisplay.textContent=computerScore;
            break;
        case "It's a Draw!":
            resultDisplay.style.color="gray";
            break;
    }
}