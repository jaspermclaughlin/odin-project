const prompt = require("prompt-sync")()

function getComputerChoice() {
  var choices = ["Rock", "Paper", "Scissors"];
  var randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function singleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase(0) + playerSelection.slice(1).toLowerCase()
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else if (playerSelection == computerSelection) {
    return "It's a tie. Go again.";
  } else {
    return "You lose. " + computerSelection + " beats " + playerSelection;
  }
}


function singleGame(){
const playerSelection = prompt("Is your choice Rock, Paper or Scissors? ");
const computerSelection = getComputerChoice();
return (singleRound(playerSelection, computerSelection));
}

function playGame() {
  for (let i = 0; i < 5; i++ ) {
    console.log(singleGame())
  }
}

playGame()