const prompt = require("prompt-sync")();

const Plays = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors"
};

playGame();


function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return Plays.rock;
  } else if (choice === 1) {
    return Plays.paper;
  } else if (choice >= 2) {
    return Plays.scissors;
  }
}


function getUserChoice() {
  let userInput = prompt("Pick rock, paper or scissors ");
  return userInput.toLowerCase();
}


function chooseWinner() {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    return "It's a draw!";

  }
  if ((userChoice === Plays.rock && computerChoice === Plays.paper) ||
    (userChoice === Plays.paper && computerChoice === Plays.scissors) ||
    (userChoice === Plays.scissors && computerChoice === Plays.rock)) {
    return "You lose :(";
  }
  if ((userChoice === Plays.rock && computerChoice === Plays.scissors) ||
    (userChoice === Plays.paper && computerChoice === Plays.rock) ||
    (userChoice === Plays.scissors && computerChoice === Plays.paper))
    return "You win! :)";

}

function playGame() {


  let userScore = 0;
  let computerScore = 0;
  const rounds = prompt("How many rounds you wanna play? ");

  for (let i = 1; i <= (rounds); i++) {
    console.log("Round:" + i);
    const winner = chooseWinner();

    if (winner === "You lose :(") {

      computerScore = computerScore + 1;
      console.log("point for computer");

    } else if (winner === "You win! :)") {

      userScore = userScore + 1;
      console.log("point for player!");

    } else if (winner === "It's a draw!") {

      console.log("Draw");


    }

    console.log("userScore: " + userScore);
    console.log("computerScore:" + computerScore);
  }
  if (userScore > computerScore) {
    console.log("Congratulations! You win!");
  } else {
    console.log("Im sorry, You lose :(");

  }
}