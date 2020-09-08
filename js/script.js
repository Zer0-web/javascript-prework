let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
    else if(argMoveId == 2){
      return 'papier';
    }
    else if(argMoveId == 3){
      return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}



/*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
  computerMove = 'papier';
}
else if(randomNumber == 3){
  computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
  playerMove = 'papier';
}
else if(playerInput == '3'){
  playerMove = 'nożyce';
}*/



 printMessage('Twój ruch to: ' + playerMove);

 function displayResult(computerMove, playerMove){
  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

  if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
}
}

/*if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!')
}
else if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!')
}
else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!')
}
else if(computerMove =='kamień' && playerMove == 'nożyce'){
    printMessage('Tym razem ja wygrałem :)')
}
else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Tym razem ja wygrałem :)')
}
else if(computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Tym razem ja wygrałem :)')
}
else if(computerMove =='kamień' && playerMove == 'kamień'){
    printMessage('Mamy Remis!')
}
else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Mamy Remis!')
}
else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Mamy Remis!')
}*/