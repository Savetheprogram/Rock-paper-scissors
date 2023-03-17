// @ts-ignore
type Figures = "rock" | "paper" | "scissors"
const PlaysArr: Figures[] = ["rock", "paper", "scissors"];

const Plays: { [key: string]: Figures } = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors"
};


const rockPlayButton = document.querySelector("#rockPlay");
const paperPlayButton = document.querySelector("#paperPlay");
const scissorsPlayButton = document.querySelector("#scissorsPlay");
// rockPlayButton.addEventListener("click", getUserChoice(Plays.rock));
// @ts-ignore
rockPlayButton.addEventListener("click", () => playGame(Plays.rock));
// @ts-ignore
paperPlayButton.addEventListener("click", () => playGame(Plays.paper));
// @ts-ignore
scissorsPlayButton.addEventListener("click", () => playGame(Plays.scissors));


function getComputerChoice(): Figures {
  let choice = Math.floor(Math.random() * 3);
  return PlaysArr[choice];
}


function chooseWinner(userChoice: Figures) {
  // const userChoice = getUserChoice();
  // console.log("dskjfhdsfdsh" + userChoice);
  const computerChoice = getComputerChoice();
  // console.log(userChoice);
  // console.log(computerChoice);
  if (userChoice === computerChoice) {
    return "It's a draw!";
  }

  if ((userChoice === Plays.rock && computerChoice === Plays.paper) ||
    (userChoice === Plays.paper && computerChoice === Plays.scissors) ||
    (userChoice === Plays.scissors && computerChoice === Plays.rock)) {
    return "You lose :(";
  }

  return "You win! :)";

}

let userScore = 0;
let computerScore = 0;
let round = 0;

function playGame(figure: Figures) {


  const roundsDEBUG = 1;
  // @ts-ignore
  const rounds = parseInt(roundsDEBUG);
  round += 1;

  const winner = chooseWinner(figure);

  if (winner === "You lose :(") {

    computerScore = computerScore + 1;
    console.log("point for computer");

  } else if (winner === "You win! :)") {

    userScore = userScore + 1;
    console.log("point for player!");

  } else if (winner === "It's a draw!") {

    console.log("Draw");


  }
  console.log("round:" + round);
  console.log("userScore: " + userScore);
  console.log("computerScore:" + computerScore);

  // if (userScore == computerScore) {
  //   console.log("DRAW");
  // } else if (userScore > computerScore) {
  //   console.log("Congratulations!! You win!");
  // } else {
  //   console.log("Im sorry, You lose :(");
  //
  // }
}