let player;
let computer;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset');
let playerSelection;
const winner = document.querySelector('#winner');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');


window.onload = ()=> {
    player = 0;
    computer = 0;
    playerScore.textContent = "Player score: " + player;
    computerScore.textContent = "Computer score: " + computer;
    winner.textContent = "Pick your weapon!";
}
reset.addEventListener('click',() => {
    player= 0;
    computer= 0;
    playerScore.textContent = "Player score: " + player;
    computerScore.textContent = "Computer score: " + computer;
    winner.textContent = "Pick your weapon!";
})

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playerChoice.textContent = "Player: " + playerSelection;
    playRound();
})
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playerChoice.textContent = "Player: " + playerSelection;
    playRound();
})
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playerChoice.textContent = "Player: " + playerSelection;
    playRound();
})

function getComputerChoice(){
    let number = Math.floor(Math.random()*3) +1;
    let computerPick = (number == 1) ? 'rock': 
    (number == 2) ? 'paper': 
    'scissors';
    computerChoice.textContent = "Computer: " + computerPick;
    return computerPick;
}


function playRound(){
    
    RockPaperScissors(playerSelection, getComputerChoice());
    
}


function RockPaperScissors(p, c){
    if(p == 'rock' && c == 'scissors'|| p == 'paper' && c == 'rock' || p == 'scissors' && c == 'paper'){
        player = player + 1;
        winner.textContent = "One point to player!";
        playerScore.textContent = "Player score: " + player;
        computerScore.textContent = "Computer score: " + computer;
    }
        
    else if ( p == 'rock' && c == 'paper'|| p == 'paper' && c == 'scissors'||p == 'scissors' && c == 'rock') {
        computer = computer + 1;
        winner.textContent = "One point to computer!";
        playerScore.textContent = "Player score: " + player;
        computerScore.textContent = "Computer score: " + computer;
    }
    else{ 
        winner.textContent = "tie! no points";
        playerScore.textContent = "Player score: " + player;
        computerScore.textContent = "Computer score: " + computer;
    }
}    
        