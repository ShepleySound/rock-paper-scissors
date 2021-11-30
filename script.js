const TIE = "tie";
const LOSS = "loss";
const WIN = "win";


function randomInt(max){
    randomNumber = Math.floor(Math.random() * max) + 1;
    return randomNumber;
}

function computerPlay(){
    switch (randomInt(3)) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playerPlay(){
    while (true){
        choice = prompt("Enter Rock, Paper, or Scissors");
        choice = choice[0].toUpperCase() + choice.substring(1).toLowerCase();
        if (choice == "Rock" || choice == "Paper" || choice == "Scissors"){
                return choice;
        }
    } 
}

function playRound(playerMove, computerMove){
    switch (playerMove) {
        case "Rock":
            switch (computerMove){
                case "Rock":
                    return TIE
                case "Paper":
                    return LOSS
                case "Scissors":
                    return WIN
            }
        case "Paper":
            switch (computerMove){
                case "Rock":
                    return WIN
                case "Paper":
                    return TIE
                case "Scissors":
                    return LOSS
            }
        case "Scissors":
            switch (computerMove){
                case "Rock":
                    return LOSS
                case "Paper":
                    return WIN
                case "Scissors":
                    return TIE
            }
    }
}

function WinDecider(){
    if (playerWins == 5){
        winAnnounce.textContent = "YOU WIN!"
        return true
    }
    else if (computerWins == 5){
        winAnnounce.textContent = "YOU LOSE!"
        return true;
    }
    else return false;
}

function Game(){
    let winnerDecided = WinDecider();
    if (!winnerDecided){
        round++;
        if (roundResult == WIN){
            playerWins++;
            resultAnnounce.textContent = "WIN";
        }
        if (roundResult == LOSS){
            computerWins++;
            resultAnnounce.textContent = "LOSE";
        }
        if (roundResult == TIE){
            resultAnnounce.textContent = "TIE";
        }
        playerScore.textContent = playerWins;
        pcScore.textContent = computerWins;
    }
    sameRound = WinDecider()
    if (sameRound){
        nextButtonDiv.appendChild(playAgainButton);
    }
}

function GameReset(){
    playerWins = 0;
    computerWins = 0;
    round = 1;
    roundResult = null;
    nextButtonDiv.removeChild(playAgainButton);
    winAnnounce.textContent = ""
    Game();
}

/// Game Data/Stats
let playerWins = 0;
let computerWins = 0;
let round = 1;
let roundResult;
let playerSelection, computerSelection;
const playerScore = document.querySelector(".score.player");
const pcScore = document.querySelector(".score.pc");
const resultAnnounce = document.querySelector(".announcer");
const winAnnounce = document.querySelector(".win-text");
const playAgainButton = document.createElement('button');
playAgainButton.textContent = "Play Again";
const nextButtonDiv = document.querySelector('.next-button');
playAgainButton.classList.add("choice-button");


const selections = document.querySelectorAll(".selection")
selections.forEach((selection) => {
    console.log(selection.id)
    selection.addEventListener("click", function(e) {
        playerSelection = e.target.id
        computerSelection = computerPlay()
        roundResult = playRound(playerSelection, computerSelection)
        Game();
    })
    selection.addEventListener("click", function() {
        resultAnnounce.classList.remove("transition");
        void resultAnnounce.offsetWidth;
        resultAnnounce.classList.add("transition");
    })
})

playAgainButton.addEventListener("click", GameReset);

