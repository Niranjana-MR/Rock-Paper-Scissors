const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const btnClear = document.querySelector('#clear');

const container = document.querySelector('#container');

const message = document.createElement('div');
container.appendChild(message);

const score = document.createElement('div');
container.appendChild(score);

const finalResult = document.createElement('h4');
container.appendChild(finalResult);

let playerScore = 0;

function game() {
    let result = '';
    let counter = 1;

    btnRock.addEventListener('click', () => {
        finalResult.textContent = '';
        result = playRound('rock', computerPlay());
        playerScore = calcScore(result, playerScore);
        score.textContent = playerScore + '/' + counter;
        counter =  checkCounter(counter);
    });

    btnPaper.addEventListener('click', () => {
        finalResult.textContent = '';
        result = playRound('paper', computerPlay());
        playerScore = calcScore(result, playerScore);
        score.textContent = playerScore + '/' + counter;
        counter = checkCounter(counter);
    });

    btnScissors.addEventListener('click', () => {
        finalResult.textContent = '';
        result = playRound('scissors', computerPlay());
        playerScore = calcScore(result, playerScore);
        score.textContent = playerScore + '/' + counter;
        counter = checkCounter(counter);
    })

    btnClear.addEventListener('click', ()=>{
        finalResult.textContent = '';
        result = '';
        score.textContent = '';
        counter = 1;
        playerScore = 0;
        message.textContent = '';
    })
}

function checkCounter(count){
    if(count < 5){
        count += 1;
        return count;
    }
    else{
        showResult(playerScore);
        return 1;
    }
}

//Display final result
function showResult(finalScore){
    if(finalScore>2){
        finalResult.textContent = 'player wins';
        playerScore = 0;
    }
    else{
        finalResult.textContent = 'player loses'
        playerScore = 0;
    }
}


//Play a single round of rock-paper-scissors
function playRound(playerSelection, computerSelection) {

    let res = '';
    playerSelection = playerSelection.toLowerCase();

    //rock beats scissors
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            message.textContent = "It's a tie!";
            return res = 'tie';
        } else if (computerSelection === "paper") {
            message.textContent = "You Lose! Paper beats rock.";
            return res = 'lose';
        } else {
            message.textContent = "You Win! Rock beats scissors.";
            return res = 'win';
        }
    }

    //paper beats rock
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            message.textContent = "You Win! Paper beats rock.";
            return res = 'win';
        } else if (computerSelection === "paper") {
            message.textContent = "It's a tie!";
            return res = 'tie';
        } else {
            message.textContent = "You Lose! Scissors beat paper.";
            return res = 'lose';
        }
    }

    //scissors beats paper
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            message.textContent = "You Lose! Rock beats scissors.";
            return res = 'lose';
        } else if (computerSelection === "paper") {
            message.textContent = "You Win! Scissors beats paper.";
            return res = 'win';
        } else {
            message.textContent = "It's a tie!";
            return res = 'tie';
        }
    }
}

//Randomly generate rock/paper/scissors
function computerPlay() {
    let random = Math.round((Math.random() * 10));
    if (random <= 3) {
        return ("rock");
    } else if (random > 4 & random <= 7) {
        return ("paper");
    } else {
        return ("scissors");
    }
}

//Calculates Player Score
function calcScore(str, num) {
    if (str === 'tie' | str === 'lose') {
        return num;
    } else if (str === 'win') {
        return num + 1;
    }
}

game();