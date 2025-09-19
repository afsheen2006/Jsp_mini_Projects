const choices=["rock","paper","scissor"];
const playerdisplay=document.getElementById("player")
const resultdisplay=document.getElementById("result")
const computerdisplay=document.getElementById("computer")

function play(playerchoice){
    const computerchoice=choices[Math.floor(Math.random()*3)]
    let result;
    if(playerchoice==computerchoice){
        result="TIE"
    }
    else{
        switch(playerchoice){
            case "paper":
                result=(computerchoice==="rock")? "YOU WIN" : "YOU LOSE "
                break;
            case "rock":
                result=(computerchoice==="scissor")? "YOU WIN" : "YOU LOSE"
                break;
            case "scissor":
                result=(computerchoice==="paper")? "YOU WIN" : "YOU LOSE"
                break;
        }
    }
    playerdisplay.textContent=`PLAYER : ${playerchoice}`
    computerdisplay.textContent=`COMPUTER :${computerchoice}`
    resultdisplay.textContent=result;
}