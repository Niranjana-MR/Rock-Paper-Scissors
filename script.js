const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const btnClear = document.querySelector('#clear');

const container = document.querySelector('#resultContainer');

const subContainer = document.createElement('div');
subContainer.classList.add('display');
container.appendChild(subContainer);

//Choice the player made
const choice = document.createElement('div');
choice.classList.add('display');
subContainer.appendChild(choice);

//Each round result message
const message = document.createElement('div');
message.classList.add('display');
subContainer.appendChild(message);

//Player Score
const pScore = document.createElement('div');
pScore.classList.add('display');
subContainer.appendChild(pScore);

//Computer Score
const cScore = document.createElement('div');
cScore.classList.add('display');
subContainer.appendChild(cScore);

//for displaying the winner
const winner = document.createElement('h4');
winner.classList.add('display');
subContainer.appendChild(winner);

let playerScore = 0,
    computerScore = 0,
    result = '';


function game() {

    btnRock.addEventListener('click', () => rock());

    btnPaper.addEventListener('click', () => paper());

    btnScissors.addEventListener('click', () => scissors());

    btnClear.addEventListener('click', () => clear());
}


function rock() {
    checkWinner();
    result = playRound('rock', computerPlay());
    calcScore(result);
    choice.textContent = 'You played Rock...';
    pScore.textContent = 'Your Score : ' + playerScore;
    cScore.textContent = 'Computer Score : ' + computerScore;
    checkScore(playerScore, computerScore);
}

function paper() {
    checkWinner();
    result = playRound('paper', computerPlay());
    calcScore(result);
    choice.textContent = 'You played Paper...';
    pScore.textContent = 'Your Score : ' + playerScore;
    cScore.textContent = 'Computer Score : ' + computerScore;
    checkScore(playerScore, computerScore);
}

function scissors() {
    checkWinner();
    result = playRound('scissors', computerPlay());
    calcScore(result);
    choice.textContent = 'You played Scissors...';
    pScore.textContent = 'Your Score : ' + playerScore;
    cScore.textContent = 'Computer Score : ' + computerScore;
    checkScore(playerScore, computerScore);
}

function clear() {
    choice.textContent = '';
    pScore.textContent = '';
    cScore.textContent = '';
    winner.textContent = '';
    message.textContent = '';
    result = '';
    playerScore = 0;
    computerScore = 0;
}

function checkScore(plrScr, comScr){
    while(plrScr === 5 | comScr === 5){
        showResult(plrScr, comScr);
        break;
    }
    return;
}

function checkWinner(){
    if(winner.textContent != ''){
        clear();   
    }
    else{
        return;
    }
}

//Display final result
function showResult(p, c) {
    if(p>c){
        winner.textContent = 'Hurray...! You Win :)';
    }
    else {
        winner.textContent = 'ugh-oh...! You Loose :(';
    }
}


//Play a single round of rock-paper-scissors
function playRound(playerSelection, computerSelection) { //rock //randomPlay

    let res = '';

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //rock beats scissors
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            message.textContent = 'Computer played Rock. It\'s a tie!';
            return res = 'tie';
        } else if (computerSelection === 'paper') {
            message.textContent = 'Computer played Paper. You Lose!';
            return res = 'cWin';
        } else {
            message.textContent = 'Computer played Scissors. You Win!';
            return res = 'pWin';
        }
    }

    //paper beats rock
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            message.textContent = 'Computer played Rock. You win!';
            return res = 'pWin';
        } else if (computerSelection === 'paper') {
            message.textContent = 'Computer played Paper. It\'s a tie!';
            return res = 'tie';
        } else {
            message.textContent = 'Computer played Scissors. You Lose!';
            return res = 'cWin';
        }
    }

    //scissors beats paper
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            message.textContent = 'Computer played Rock.\nYou Lose!';
            return res = 'cWin';
        } else if (computerSelection === 'paper') {
            message.textContent = 'Computer played Paper.\nYou Win!';
            return res = 'pWin';
        } else {
            message.textContent = 'Computer played Scissors.\nIt\'s a tie!';
            return res = 'tie';
        }
    }
}

//Randomly generate rock/paper/scissors
function computerPlay() {
    let random = Math.round((Math.random() * 10));
    if (random <= 3) {
        return ('rock');
    } else if (random > 4 & random <= 7) {
        return ('paper');
    } else {
        return ('scissors');
    }
}

//Calculates Player Score
function calcScore(score) {
    if (score === 'tie') {
        playerScore += 0;
    } else if (score === 'cWin') {
        computerScore += 1;
    } else if (score === 'pWin') {
        playerScore += 1;
    }

}

game();