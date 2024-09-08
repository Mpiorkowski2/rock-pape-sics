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

const div1 = document.createElement("div");
document.body.appendChild(div1);

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

function playWithSelection(selection) {
    const computerChoice = getComputerChoice();
    const result = playRound(selection, computerChoice);

    if (result === "You win!"){
        humanScore++;
    }
    else if (result === "You lose"){
        computerScore++;
    }
    else{
        
    }
    updateDisplay(result);
    checkGameEnd();
}
const but1 = document.createElement("button");
but1.textContent = "Rock";
but1.addEventListener("click", function() {
    playWithSelection("Rock");
});
document.body.appendChild(but1);

const but2 = document.createElement("button");

but2.textContent = "Paper";
but2.addEventListener("click", function() {
    playWithSelection("Paper");
});
document.body.appendChild(but2);

const but3 = document.createElement("button");
but3.textContent = "Scissors";
but3.addEventListener("click", function() {
    playWithSelection("Scissors");
});
document.body.appendChild(but3);

