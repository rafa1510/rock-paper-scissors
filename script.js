function getComputerChoice()
{
    randomNumber = Math.floor(Math.random() * 99) + 1;
    if (randomNumber > 0 && randomNumber <= 33)
    {
        return("ROCK");
    }
    else if (randomNumber > 33 && randomNumber <= 66)
    {
        return("PAPER")
    }
    else if (randomNumber > 66 && randomNumber <= 99)
    {
        return("SCISSORS")
    }
}
