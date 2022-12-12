let player;
let computer;
playRound();

function getComputerChoice(){
    let number = Math.floor(Math.random()*3) +1;
    let computerPick = (number == 1) ? 'rock': 
    (number == 2) ? 'paper': 
    'scissors';
    return computerPick;
}
        
        
        
function getPlayerSelection(){
    let playerSelection = prompt('Rock, paper , scissors? ');
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}
        
       
        

function validInput(playerSelection){
    if(playerSelection == null || playerSelection == ''){
            alert('invalid user input');
    }  
    return; 
}
   

function playRound(){
    player = 0;
    computer = 0;
    const winner = document.querySelector('#winner');
    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#computerScore');
            
    for(var i = 0; i<5; i++){
        let playerSelection = getPlayerSelection();
        let computerSelection = getComputerChoice();
        validInput(playerSelection);
        RockPaperScissors(playerSelection, computerSelection);
        console.log(' player choice = ' + playerSelection + ' & computer choice = ' + computerSelection);
                
}
playerScore.textContent = "Player score: " + player;
computerScore.textContent = "Computer score: " + computer;

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
        