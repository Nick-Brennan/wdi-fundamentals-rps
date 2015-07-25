////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove === computerMove){
        winner = 'tie'
    }
    else{
        if(playerMove === 'rock'){
            switch(computerMove){
                case 'paper':
                    winner = 'computer'
                    break;
                case 'scissors':    
                    winner = 'player'
                    break;
                default:
                    winner = 'INVALID COMPUTER MOVE';
            }
        }
        else if(playerMove === 'paper'){
            switch(computerMove){
                case 'rock':
                    winner = 'player';
                    break;
                case 'scissors':    
                    winner = 'computer';
                    break;
                default:
                    winner = 'INVALID COMPUTER MOVE';
            }
        }
        else if(playerMove === 'scissors'){
            switch(computerMove){
                case 'rock':
                    winner = 'computer';
                    break;
                case 'paper':
                    winner = 'player';
                    break;
                default:
                    winner = 'INVALID COMPUTER MOVE';
            }
        }
        else{
            winner = 'INVALID PLAYER MOVE';
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while(playerWins < 5 && computerWins < 5){
        var pMove = getInput();
        var cMove = randomPlay();
        switch(getWinner(getPlayerMove(pMove), getComputerMove(cMove))){
            case 'player':
                playerWins++;
                break;
            case 'computer':
                computerWins++;
                break;
            case 'tie':
                break;
            default:
                console.log('An Error Occured');
        }
        console.log('The Player chose ' + pMove + ' while the Computer chose ' + cMove)
        console.log('The score is currently P: ' + playerWins + ' to C: ' + computerWins);
    }
    return [playerWins, computerWins];
}

function playToX(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while(playerWins < x && computerWins < x){
        var pMove = getInput();
        var cMove = randomPlay();
        switch(getWinner(getPlayerMove(pMove), getComputerMove(cMove))){
            case 'player':
                playerWins++;
                break;
            case 'computer':
                computerWins++;
                break;
            case 'tie':
                break;
            default:
                console.log('An Error Occured');
        }
        console.log('The Player chose ' + pMove + ' while the Computer chose ' + cMove)
        console.log('The score is currently P: ' + playerWins + ' to C: ' + computerWins);
    }
    return [playerWins, computerWins];
}

