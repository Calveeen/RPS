function computerPlay(){
    let number = Math.floor(Math.random() * 3);
    switch(number){
        case 0: 
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();

    if (player == computerSelection){
        console.log("Tie! Both players played " + player + "."); 
        return 0;
    }

    if(player == "rock" && computerSelection == "paper" || player == "paper" && computerSelection == "scissors" || player == "scissors" && computerSelection == "rock"){
        console.log("You Lose, " + computerSelection + " beats " + player + "!");
        computerScore++;
        return computerScore;
    } else{
        console.log("You Win, " + player + " beats " + computerSelection + "!");
        playerScore++;
        return playerScore;
    }

}

function game(){
    for(let i = 1; i < 6; i++){
        console.log("Round " + i + ", BEGIN!!");

        let playerChoice = prompt("Enter Rock, Paper, or Scissors: ");
        let computerChoice = computerPlay();

        console.log(`You have chosen ${playerChoice}, and the computer chose ${computerChoice}`);
        console.log(playRound(playerChoice, computerChoice));
    }
    if(playerScore > computerScore){
        console.log(`You won! You beat the computer ${playerScore}-${computerScore}`);
    } else if(playerScore == computerScore){
        console.log('Both of you tied ${computerScore}-${playerScore}');
    } else{
        console.log(`You lost! The computer beat you ${computerScore}-${playerScore}`);
    }
    
}
