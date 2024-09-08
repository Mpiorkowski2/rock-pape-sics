function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"]; 
    const randomIndex = Math.floor(Math.random() * options.length);
    return options [randomIndex];

}


 
function getHumanChoice(){

let humanChoice = prompt("Your turn for Rock, Paper, Scissors!")
return humanChoice;
}





    function playRound(humanChoice, computerChoice){
        if (humanChoice === "Rock" && computerChoice === "Scissors"){
        return "You win!";
       
       }else if (humanChoice === "Paper" && computerChoice === "Rock"){
        return "You win!";
    
       }else if (humanChoice === "Scissors" && computerChoice === "Rock"){
        return "You win!";
       
       }else if (humanChoice === computerChoice){
        return "Draw!";
    
       }else{
        return "You lose!";
       }
    }
    

    
function playGame(num){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 1; i <=num; i++){
        const humanChoiceResult = humanChoice();
        const computerChoiceResult = computerChoice();
        alert("You chose" + userChoice + "\nThe computer chose " + computerChoice + "\n" + result );
        
        if(result === "You win!"){
            humanscore++;
        }else(result === "You lose!"){
            computerscore++;
        }

      }  const result = playRound(humanChoice, computerChoice);

        playRound(humanChoiceResult, computerChoiceResult);
        
        console.log(`Scores after round ${i} - Human: ${humanScore}, computer ${computerScore}`);

        if (humanScore > computerScore){
            console.log(`You win the game! Final score - Human: ${humanScore}, Computer: ${computerScore}`)
        }
        else if (humanScore < computerScore){
            console.log(`You Lose the game punk ass bitch! Final score - Human: ${humanScore}, Computer: ${computerScore}`)
        }  else {
        console.log(`The game is a draw! Final score - Human: ${humanScore}, Computer: ${computerScore}`)
    }
}

playGame(5)

