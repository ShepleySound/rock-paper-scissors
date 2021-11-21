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

function game(){
    playerWins = 0;
    computerWins = 0;
    for (i = 1; i <= 5; i++){
        console.log(`Round ${i}`)
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        roundResult = playRound(playerSelection, computerSelection)
        if (roundResult == WIN){
            playerWins++
        }
        if (roundResult == LOSS){
            computerWins++
        }
        console.log(`Player: ${playerSelection}, PC: ${computerSelection}`)
        console.log(`Player: ${playerWins}, PC: ${computerWins}`)
    }
    if (playerWins > computerWins){
        console.log("You win!")
    }
    else if (computerWins > playerWins){
        console.log("You lose!")
    }
    else{
        console.log("It's a tie!")
    }
}


