let player;
let computer;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset');
let playerSelection;

reset.addEventListener('click',() => {
    player= 0;
    computer= 0;
    playerScore.textContent = "Player score: " + player;
    computerScore.textContent = "Computer score: " + computer;

})

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    console.log("Player: " + playerSelection);
    playRound();
})
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    console.log("Player: " + playerSelection);
    playRound();
})
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    console.log("Player: " + playerSelection);
    playRound();
})

function getComputerChoice(){
    let number = Math.floor(Math.random()*3) +1;
    let computerPick = (number == 1) ? 'rock': 
    (number == 2) ? 'paper': 
    'scissors';
    console.log("Computer: " + computerPick)
    return computerPick;
}


function playRound(){
    const winner = document.querySelector('#winner');
    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#computerScore');
  RockPaperScissors(playerSelection, getComputerChoice());
    if(computer > player){
        winner.textContent = "Dang! you lost!" ;
        
    }
    else if(player > computer){
        winner.textContent = "Nice job! You win!"  ;
    }
    else{
        winner.textContent = "Oof! That's a tie! Better luck next time!" ;
    }
}


function RockPaperScissors(p, c){
    if(p == 'rock' && c == 'scissors'|| p == 'paper' && c == 'rock' || p == 'rock' && c == 'scissors'){
        player = player + 1;
        console.log('One point to player!');
    }
        
    else if ( p == 'rock' && c == 'paper'|| p == 'paper' && c == 'scissors'||p == 'rock' && c == 'paper') {
        computer = computer + 1;
        console.log('One point to computer!');
    }
    else{ 
    console.log('tie! no points');
    }
}    
        