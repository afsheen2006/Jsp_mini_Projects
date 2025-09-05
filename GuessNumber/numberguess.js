let min=1;
let max=100;
let answer= Math.floor(Math.random() * (max - min + 1)) + min;
let attempts=0;
let submit=document.getElementById("submitGuess");
let text=document.getElementById("error");
let running=submit.onclick=function() {
    attempts++
    let guess = document.getElementById("guess").value;
    if (isNaN(guess)) {
        text.textContent="Please enter a valid number.";
        return;
    }
    guess=Number(guess);
    if (guess < min || guess>max){
        text.textContent=`Out of range! Please guess a number between ${min} and ${max}.`;
    }
    else if(guess<answer){
        text.textContent="Too low! Try again.";
    }
    else if(guess>answer){
        text.textContent="Too high! Try again.";
    }
    else {
        text.textContent=`Congratulations 🥂! You've guessed the number ${answer} in ${attempts} attempts.`;
        running=false;
    }
}


    
