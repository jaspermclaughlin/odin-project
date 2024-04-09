function getComputerChoice() {
  var choices = ["Rock", "Paper", "Scissors"];
  var randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function singleRound(playerSelection, computerSelection) {
  playerSelection = toLowerCase(playerSelection);
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

const playerSelection = prompt("Is your choice Rock, Paper or Scissors? ");
const computerSelection = getComputerChoice();
console.log(singleRound(playerSelection, computerSelection));
