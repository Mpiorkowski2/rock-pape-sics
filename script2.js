function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"]; 
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getHumanChoice(){
    let humanChoice = prompt("Your turn for Rock, Paper, Scissors!");
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === "Rock" && computerChoice === "Scissors"){
        return "You win!";
    } else if (humanChoice === "Paper" && computerChoice === "Rock"){
        return "You win!";
    } else if (humanChoice === "Scissors" && computerChoice === "Rock"){
        return "You win!";
    } else if (humanChoice === computerChoice){
        return "Draw!";
    } else {
        return "You lose!";
    }
}



    if (humanScore > computerScore) {
        console.log(`You win the game! Final score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins the game! Final score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`The game is a draw! Final score - Human: ${humanScore}, Computer: ${computerScore}`);
    }

playRound(5)

const but1 = document.createElement("button");
but1.addEventListener("click", function(){
    playround("Rock");
});
const but2 = document.createElement("button");
but2.addEventListener("click", function(){
    playround("Paper");
});
const but3 = document.createElement("button");
but3.addEventListener("click", function(){
    playround("Scissors");
});

const div1 = document.createElement("div");
document.body.appendChild(div1);

if (humanScore > computerScore) {
    div1.textContent = `You win the game! Final score - Human: ${humanScore}, Computer: ${computerScore}`;
} else if (computerScore > humanScore) {
    div1.textContent =`Computer wins the game! Final score - Human: ${humanScore}, Computer: ${computerScore}`;
} else {
    div1.textContent =`The game is a draw! Final score - Human: ${humanScore}, Computer: ${computerScore}`;
}

let humanScore = 0;
let computerScore = 0;

function updateDisplay(result){
    div1.textContent = `Human : ${humanScore} -  Computer: ${computerScore} - ${result}`;
}

function checkGameEnd(){
    if (humanScore >= 5){
        div1.textContent += " - You win the game!";
        disableButtons()
    }
    else if (computerScore >= 5 ){
        div1.textContent += " - Computer wins NIGGA!";
        disableButtons()
    }
}

function disableButtons() {
    but1.disabled = true;
    but2.disabled = true;
    but3.disabled = true;
}

