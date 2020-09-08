const movements = ['kamien', 'papier', 'nozyce'];
 
const results = {
  papier: {
    loses: 'nozyce',
    wins: 'kamien'
  },
  nozyce: {
    loses: 'kamien',
    wins: 'papier'
  },
  kamien: {
    loses: 'papier',
    wins: 'nozyce'
  }
}
 
const randomNumber = Math.floor(Math.random() * 3 + 1);
 
function getMoveName(argMoveId) {
  let moveId = argMoveId - 1;
  if(movements[moveId]) {
    return movements[moveId];
  }
  printMessage("Nie znam ruchu o id " + movements[moveId] + ".");
  return "nieznany ruch";
}
 
function getResult(computerMove, playerMove) {
  if(results[computerMove].wins === playerMove) {
    return 'Przegrywasz!'
  }
  if(results[computerMove].loses === playerMove) {
    return 'Ty wygrywasz!'
  }
  if(computerMove === playerMove) {
    return 'Mamy Remis!'
  }
}
 
 
function app() {
  console.log('hell')
  let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
  console.log("Gracz wpisał: " + playerInput);
  let playerMove = getMoveName(playerInput);
  let computerMove = getMoveName(randomNumber);
 
  printMessage("Mój ruch to: " + computerMove);
  printMessage("Twój ruch to: " + playerMove);
  printMessage(getResult(computerMove, playerMove));
 
}

app()