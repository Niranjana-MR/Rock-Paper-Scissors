//console.log("it works");
//computerPlay();
game();


//function that randomly outputs rock/paper/scissors
function computerPlay(){
    let random = Math.round((Math.random()*10));
    //console.log(random);
    if(random<=3){
        return("rock");
    }
    else if(random>4 & random<=7){
        return("paper");
    }
    else{
        return("scissors");
    }
}


//function that plays a single round of rock-paper-scissors
function playRound(playerSelection, computerSelection){
   
    //make player's selection case sensitive
    playerSelection = playerSelection.toLowerCase();

    //rock beats scissors
    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            return "It's a tie!"
        }
        else if(computerSelection === "paper"){
            return "You Lose! Paper beats rock."
        }
        else{
            return "You Win! Rock beats scissors."
        }
    }

    //paper beats rock
    if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            return "You Win! Paper beats rock."
        }
        else if(computerSelection === "paper"){
            return "It's a tie!"
        }
        else{
            return "You Lose! Scissors beat paper."
        }
    }

    //scissors beats paper
    if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            return "You Lose! Rock beats scissors."
        }
        else if(computerSelection === "paper"){
            return "You Win! Scissors beats paper."
        }
        else{
            return "It's a tie!"
        }
    }
}

//This is the main function that plays the game
function game(){
    
    //initial score
    let playerScore = 0;
    let computerScore = 0;

    //Play 5 rounds
    for(let i=0;i<5;i++){
        let playerInput = window.prompt("Plase enter rock or paper or scissors", "rock");
        
        //check for player input 
        
        let computerInput = computerPlay();
        let result = playRound(playerInput, computerInput);
        console.log(result);

        //store score
        if(result === "You Win! Scissors beats paper." | "You Win! Rock beats scissors." | "You Win! Paper beats rock."){
            playerScore++;
        }
        else if(result === "You Lose! Paper beats rock."| "You Lose! Scissors beat paper." | "You Lose! Rock beats scissors."){
            computerScore++;
        }
        else{
            continue;
        }
    }

    //display end result
    if(playerScore>computerScore){
        console.log("Hurray! You win...");
    }
    else if(computerScore>playerScore){
        console.log("Oops! You loose...");
    }
    else{
        console.log("Ergh! It's a tie...")
    }
}