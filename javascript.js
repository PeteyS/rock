function computerPlay(){
    let random = Math.floor(Math.random()*3);
    if (random == 0){
        return 'rock'
    }
    else if(random == 1){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}
function playRound(player, computer){ //0 is loss,1 is win, 2 is tie
    player = player.toLowerCase();

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
    else{
        return 'wtf, enter rock,paper or scissors';
    }
}

function game(){
    compScore = 0;
    playerScore = 0;
    let round = 0;
    let compChoice = '';

    
    while(compScore != 5 && playerScore != 5){

        let choice = '';
        choice = choice.toLowerCase;
        compChoice = computerPlay();

        while(choice != 'rock' && choice != 'paper' && choice != 'scissors'){
            choice = prompt("Enter either rock, paper, scissors");
            choice = choice.toLowerCase();
        }

        round = playRound(choice, compChoice);

        if (round == 0){
            alert(`You lost the round: Computer chose ${compChoice}, you chose ${choice}`);
            compScore++;
        }
        else if (round == 1){
            alert(`You won the round: Computer chose ${compChoice}, you chose ${choice}`);
            playerScore++;
        }
        else{
            alert(`Tie`);
        }
        console.log(`Player: ${playerScore} | Computer ${compScore}`);

        if(compScore == 5){
            alert('Computer wins');
        }
        if (playerScore == 5){
            alert('Player wins');
        }
    }
}

game();

