let game = (player_selec, comp_selec) => playRound(player_selec, comp_selec); 

function playRound(playerSelection, computerSelection)
{
    if(playerSelection == "rock" && computerSelection == "paper")
    {
        computerScore+=1;
        console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore);
        return console.log("You lose! Paper beats rock");
    }   
    else if(playerSelection == "rock" && computerSelection == "scissors")
    {
        playerScore+=1;
        console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore);
        return console.log("You win! rock beats scissors");
    }    
    else if(playerSelection == "scissors" && computerSelection == "paper")
    {
        playerScore+=1;
        console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore);
        return console.log("You win! scissors beat paper");
    }    
    else if(playerSelection == "scissors" && computerSelection == "rock")
    {
       computerScore+=1;
       console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore);
       return console.log("You lose! rock beats scissors");
    }   
    else if(playerSelection == "paper" && computerSelection == "rock")
    {
        playerScore+=1;
        console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore);
        return console.log("You win! Paper beats rock");
    }    
    else if(playerSelection == "paper" && computerSelection == "scissors")
    {
        computerScore+=1;
        console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore);
        return console.log("You lose! scissors beats paper");
    }
}

function playerPlay()
{
    let i = 0;
    while(i!=1)
    {
        let choice = prompt("Type any three: Rock, Paper, Scissors ", );
        choice = choice.toLowerCase();
        console.log(choice);
        switch(choice)
        {
            case "rock":
                i++;
                return choice; 
                break;
            case "paper":
                i++;
                return choice;
                break;
            case "scissors":
                i++;
                return choice;
                break;
            default:
                alert("Wrong input!");
                break;
        }
    }
    
}

function computerPlay()//Logic for the computer to choose a random number
{
    let rock="rock";
    let paper="paper";
    let scissor="scissors";
    let rand=Math.floor(Math.random()*(3));
    switch(rand)//The random number will select the 
    {
        case 0:
            console.log("Pc chose rock");
            return rock;
            break;
        case 1:
            console.log("Pc chose paper");
            return paper;
            break;
        case 2:
            console.log("Pc chose scissors");
            return scissor;
            break;
        default:
            console.log("The server is going crazyyyy!!!!!");
    }
}
//Declaring global variables for score
let playerScore=0, 
    computerScore=0,
    result;
for(let i=0; i<5; i++)//The game will run for 5 rounds
{
    result=game(playerPlay(), computerPlay()); //Here game function calls the playerplay and computer play functions
    console.log(result);
}

if(playerScore>computerScore)//if-else to print the winner
    console.log("You win!");
else if(playerScore<computerScore)
    console.log("You lose!");
else if(playerScore == computerScore)
    console.log("It's a Tie");
