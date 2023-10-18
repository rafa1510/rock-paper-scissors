function getComputerChoice()
{
    randomNumber = Math.floor(Math.random() * 99) + 1;
    if (randomNumber > 0 && randomNumber <= 33)
    {
        return("ROCK");
    }
    else if (randomNumber > 33 && randomNumber <= 66)
    {
        return("PAPER");
    }
    else if (randomNumber > 66 && randomNumber <= 99)
    {
        return("SCISSORS");
    }
}

function playRound(playerSelection, computerChoice)
{
    if (playerSelection == computerChoice)
    {
        console.log("It's a tie!");
        return("Tie");
    }
    else if (playerSelection == "ROCK" && computerChoice == "PAPER")
    {
        console.log("You lose! Paper beats Rock");
        return("Computer");
    }
    else if (playerSelection == "ROCK" && computerChoice == "SCISSORS")
    {
        console.log("You win! Rock beats Scissors");
        return("Player");
    }
    else if (playerSelection == "PAPER" && computerChoice == "ROCK")
    {
        console.log("You win! Paper beats Rock");
        return("Player");
    }
    else if (playerSelection == "PAPER" && computerChoice == "SCISSORS")
    {
        console.log("You lose! Scissors beats Paper");
        return("Computer");
    }
    else if (playerSelection == "SCISSORS" && computerChoice == "ROCK")
    {
        console.log("You lose! Rock beats Scissors");
        return("Computer");
    }
    else if (playerSelection == "SCISSORS" && computerChoice == "PAPER")
    {
        console.log("You win! Scissors beats Paper");
        return("Player");
    }
}

function startGame()
{
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Rock, Paper or Scissors?");

        let casePlayerSelection = playerSelection.toUpperCase();
        if (casePlayerSelection != "ROCK" && casePlayerSelection != "PAPER" && casePlayerSelection != "SCISSORS")
        {
            console.log("Please input either Rock, Paper, or Scissors");
        }

        let roundWinner = playRound(casePlayerSelection, getComputerChoice());
        if (roundWinner == "Player")
        {
            playerScore++;
        }
        else if (roundWinner == "Computer")
        {
            computerScore++;
        }
    }

    if (playerScore == computerScore)
    {
        console.log("It's a tied game");
    }
    else if (playerScore > computerScore)
    {
        console.log("You win the game!");
    }
    else if (computerScore > playerScore)
    {
        console.log("You lose the game")
    }
}

// Event listeners for the Rock, Paper, and Scissors buttons

let choiceButtons = document.querySelectorAll(".choiceButton");
choiceButtons.forEach(choice => {
    choice.addEventListener("click", () => {
        console.log(choice.textContent);
    })
})

/* startGame(); */