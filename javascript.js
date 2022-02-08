let title = document.querySelector('#title');
let border = document.querySelector('#score');

let names = document.querySelectorAll('.name');


let playerScoreBoard = document.querySelector("#playerNumber");

let computerScoreBoard = document.querySelector("#computerNumber");


let computerPicture = document.querySelector('#comp');

let button = document.querySelector('#btn');
button.disabled = true;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let playerPick="";
let computerPick = "";
let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', function(){
    change('rock');
    changeScale();
    rock.style.transform = 'scale(1.5)';
    removeClasses();
    changeColors('white');
});
paper.addEventListener('click', function(){
    change('paper');
    changeScale();
    paper.style.transform = 'scale(1.5)';
    removeClasses();
    changeColors('white');
});
scissors.addEventListener('click', function(){
    change('scissors');
    changeScale();
    scissors.style.transform = 'scale(1.5)';
    removeClasses();
    changeColors('white');
});

button.addEventListener('click', ()=>{
    button.disabled = true;
    compPick();
    let outcome = playRound(playerPick, computerChoice);
    returnScore(outcome);
    if(playerScore == 5|| computerScore == 5){
        if (computerScore == 5){
            alert('Computer Wins');
        }
        else if(playerScore ==5){
            alert('Player Wins');
        }
        reset();
    }
});

function reset(){
    removeClasses();
    changeColors('white');
    playerScore = 0;
    computerScore = 0;
    playerScoreBoard.textContent = `0`;
    computerScoreBoard.textContent = `0`;
    
}

function changeColors(x){
    title.style.color = x;
    border.style.color = x;
    names.forEach(item => item.style.color = x);
}

function changeScale(){
    rock.style.transform = 'scale(1)';
    paper.style.transform = 'scale(1)';
    scissors.style.transform = 'scale(1)';
}
function compPick(){
    let random = Math.floor(Math.random()*3);
    if (random == 0){
        computerChoice = 'rock';
        computerPicture.classList.add('rock');
    }
    else if(random == 1){
        computerChoice = 'paper';
        computerPicture.classList.add('paper');
    }
    else{
        computerChoice = 'scissors';
        computerPicture.classList.add('scissors');
    }
}

function change(x){ //player choice
    playerPick = x;
    button.disabled = false;
}

function removeClasses(){ //for the computer background picture
    computerPicture.classList.remove('rock');
    computerPicture.classList.remove('paper');
    computerPicture.classList.remove('scissors');
}

function returnScore(x){ //distribute points
    if (x==0){
        computerScore++;
        computerScoreBoard.textContent = `${computerScore}`;
        changeColors('red');
        
    }
    else if(x==1){
        playerScore++;
        playerScoreBoard.textContent = `${playerScore}`;
        changeColors('green');
    }
}

function playRound(player, computer){ //0 is loss,1 is win, 2 is tie
    if (player == 'rock'){
        if (computer == 'rock'){
            return 2;
        }
        else if (computer == 'paper'){
            return 0;
        }
        else{
            return 1;
        }
    }
    else if (player == 'paper'){
        if (computer == 'rock'){
            return 1;
        }
        else if (computer == 'paper'){
            return 2;
        }
        else{
            return 0;
        }
    }
    else if (player == 'scissors'){
        if (computer == 'rock'){
            return 0;
        }
        else if (computer == 'paper'){
            return 1;
        }
        else{
            return 2;
        }
    }
}