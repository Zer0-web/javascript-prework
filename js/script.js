{
  const playGame = function(playerInput){
  clearMessages();
  
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
  
  console.log('Gracz wpisał: ' + playerInput);
  
  let playerMove = getMoveName(playerInput);
  
  
   function displayResult(computerMove, playerMove){
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
  
    if (
      (computerMove == "kamień" && playerMove == "papier") ||
      (computerMove == "papier" && playerMove == "nożyce") ||
      (computerMove == "nożyce" && playerMove == "kamień")
    ) {
      printMessage("Ty wygrywasz!");
    } else if (
      (computerMove == "kamień" && playerMove == "nożyce") ||
      (computerMove == "papier" && playerMove == "kamień") ||
      (computerMove == "nożyce" && playerMove == "papier")
    ) {
      printMessage("Tym razem ja wygrałem :)");
    } else {
      printMessage("Mamy Remis!");
    }
  }
  console.log('moves:', computerMove, playerMove);
  
  displayResult(computerMove, playerMove);
  }
  
  const playButton1 = document.getElementById('play-stone')
  playButton1.addEventListener('click', function(){playGame(1)});
  const playButton2 = document.getElementById('play-paper')
  playButton2.addEventListener('click', function(){playGame(2)});
  const playButton3 = document.getElementById('play-scissors')
  playButton3.addEventListener('click', function(){playGame(3)});
  }