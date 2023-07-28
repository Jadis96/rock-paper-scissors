




function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3) + 1;
    let randomString;
    switch (randomNumber) {
        case 1:
            randomString = "Rock";
            break;
        case 2:
            randomString = "Paper";
            break
        case 3:
            randomString = "Scissors"; 
            break;
        default:
            randomString = " ";
            break;
    }
    return randomString;
}



function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); 
    computerSelection = computerSelection.toLowerCase();

    const validChoices = ["rock", "paper", "scissors"];

    // Input validation loop
    while (!validChoices.includes(playerSelection)) {
        // The player's input is not valid, so prompt them to enter a valid choice
        playerSelection = prompt("Invalid input. Please enter a correct choice (Rock, Paper, or Scissors): ").toLowerCase();
    }

    if (playerSelection === computerSelection) {
        let specificMessage;
         if (playerSelection === "rock" && computerSelection === "rock") {
        specificMessage = "Rock ties with rock.";
        } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        specificMessage = "Scissors tie with scissors.";
        } else if (playerSelection === "paper" && computerSelection === "paper") {
         specificMessage = "Paper ties with paper.";
        }
        return specificMessage + " " + "It's a tie!";
    } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock") 
    
    )
    { 
        let specificMessage;
        if (playerSelection === "rock" && computerSelection === "scissors") {
            specificMessage = "Rock beats scissors.";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            specificMessage = "Scissors beats paper.";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            specificMessage = "Paper beats rock.";
        }
        return specificMessage + " " + "You win!";
    } else {
    return "You lose";
    }

}



function game () {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome! Let's begin our game")
    

    for (let round = 1; round <= 5; round++) {
        console.log("Round " + round);

    const computerSelection = getComputerChoice();
    console.log(computerSelection)

    const playerSelection = prompt("Enter your choice: Paper, Rock or Scissors");
    console.log(playerSelection);
        let roundResult = playRound (playerSelection, computerSelection);
        console.log(roundResult)

        if (roundResult.includes ("It's a tie!")) {
            playerScore++;
            computerScore++;
        } else if (roundResult.includes ("You win!")) {
            playerScore++
        } else {
            computerScore++
        }
        
        console.log("The score is: ");
        console.log("Your score: " + playerScore);
        console.log("Computer's score: " + computerScore);

    }
    
    console.log("And now... the final result!");
    if (playerScore === computerScore) {
        console.log("This game ends in a tie!");
    } else if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else {
        console.log("Oops! Computer wins the game!");
    }
}
 
game() 