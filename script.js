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
    // Event listener for the choice buttons
    let choiceButtons = document.querySelectorAll(".choiceButton");

    let playerScore = 0;
    let computerScore = 0;

    while (playerScore <= 5 || computerScore <= 5)
    {
        choiceButtons.forEach(choice => {
            choice.addEventListener("click", () => {
                let playerSelection = choice.textContent;
                let roundWinner = playRound(playerSelection, getComputerChoice());
                if (roundWinner == "Player")
                {
                    playerScore++;
                }
                else if (roundWinner == "Computer")
                {
                    computerScore++;
                }
            })
        })
    }

    if (playerScore > computerScore)
    {
        console.log("You win the game!");
    }
    else if (computerScore > playerScore)
    {
        console.log("You lose the game")
    }
}

/* startGame(); */