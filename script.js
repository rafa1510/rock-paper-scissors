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
    let casePlayerSelection = playerSelection.toUpperCase();
    if (casePlayerSelection == computerChoice)
    {
        console.log("It's a tie!");
        return("Tie");
    }
    else if (casePlayerSelection == "ROCK" && computerChoice == "PAPER")
    {
        console.log("You lose! Paper beats Rock");
        return("Computer");
    }
    else if (casePlayerSelection == "ROCK" && computerChoice == "SCISSORS")
    {
        console.log("You win! Rock beats Scissors");
        return("Player");
    }
    else if (casePlayerSelection == "PAPER" && computerChoice == "ROCK")
    {
        console.log("You win! Paper beats Rock");
        return("Player");
    }
    else if (casePlayerSelection == "PAPER" && computerChoice == "SCISSORS")
    {
        console.log("You lose! Scissors beats Paper");
        return("Computer");
    }
    else if (casePlayerSelection == "SCISSORS" && computerChoice == "ROCK")
    {
        console.log("You lose! Rock beats Scissors");
        return("Computer");
    }
    else if (casePlayerSelection == "SCISSORS" && computerChoice == "PAPER")
    {
        console.log("You win! Scissors beats Paper");
        return("Player");
    }
}