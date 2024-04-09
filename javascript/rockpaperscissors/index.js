const buttons = document.querySelectorAll("button");

let computerScore = 0;
let userScore = 0;
let scoreWindow = document.querySelector(".scores");
let playerSelection;
let computerSelection;

scoreWindow.innerHTML = userScore + " : " + computerScore;

function startGame() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerSelection = button.id;
      singleRound(playerSelection, getComputerChoice());
      checkWinner();
    });
  });
}
function renderScore(computerScore, userScore) {
  scoreWindow.innerText = `${computerScore} : ${userScore}`;
}
renderScore();
startGame();

function getComputerChoice() {
  var choices = ["Rock", "Paper", "Scissors"];
  var randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function singleRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase(0) + playerSelection.slice(1).toLowerCase();
  let result = document.getElementById("result");
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    userScore++;
  } else if (playerSelection == computerSelection) {
    alert("It's a tie. Go again.");
  } else {
    computerScore++;
  }
  scoreWindow.innerHTML = userScore + " : " + computerScore;
  return computerScore, userScore;
}

function checkWinner() {
  let winner = document.getElementById("winner");

  if (userScore == 5) {
    alert("Congratulations! You won 5 times!");
  } else if (computerScore == 5) {
    alert("Oh no! The computer won 5 times!");
  }
}
