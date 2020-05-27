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
const finalScore = document.createElement("h1");
const insertionDiv = document.getElementById("RPS");
const insertBeforeElement = document.getElementById("cpu-selection");

const btn = document.querySelectorAll("#player-selection button");
const playerChoice = btn.forEach(button =>{
        button.addEventListener("click", () =>{
            if(playerScore >= 5 || computerScore >= 5){
                alert("End of game.");
            } else{
                game(button.textContent);
            } 
        });
});

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    let displayCPUScore = document.getElementById("cpu-score");
    let displayPlayerScore = document.getElementById("player-score");
    if (player == computerSelection){
        console.log("Tie! Both players played " + player + "."); 
        return 0;
    }
    if(player == "rock" && computerSelection == "paper" || player == "paper" && computerSelection == "scissors" 
    || player == "scissors" && computerSelection == "rock"){
        computerScore++;
        displayCPUScore.textContent = "CPU: " + computerScore;
        return computerScore;
    } else{
        playerScore++;
        displayPlayerScore.textContent = "Player: " + playerScore;
        return playerScore;
    }
}

function game(playerChoice){
    let computerChoice = computerPlay();
    
    console.log(`You have chosen ${playerChoice}, and the computer chose ${computerChoice}`);
    console.log(playRound(playerChoice, computerChoice));
    
    if(playerScore === 5){
        finalScore.textContent = `You won ${playerScore}-${computerScore}!!`;
        insertionDiv.insertBefore(finalScore, insertBeforeElement);
    } else if(computerScore === 5){
        finalScore.textContent = `You lost ${computerScore}-${playerScore} ):`;
        insertionDiv.insertBefore(finalScore, insertBeforeElement);
    }
}
