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
  const computerChoice = getComputerChoice();
  if (userChoice === computerChoice) {
    return "draw";
  }

  if ((userChoice === Plays.rock && computerChoice === Plays.paper) ||
    (userChoice === Plays.paper && computerChoice === Plays.scissors) ||
    (userChoice === Plays.scissors && computerChoice === Plays.rock)) {
    return "lose";
  }

  return "win";

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

  if (winner === "lose") {

    computerScore = computerScore + 1;
    console.log("point for computer");
    const computerScoreDisplay = document.querySelector('.computerScore')
    // @ts-ignore
    computerScoreDisplay.innerText ='Computer score = ' + computerScore
    const extraInfo = document.querySelector('.winMessage');
    // @ts-ignore
    extraInfo.innerText ='You played '+ figure +' and lost, point for the computer!';


  } else if (winner === "win") {

    userScore = userScore + 1;
    console.log("point for player!");
    const userScoreDisplay = document.querySelector('.playerScore')
    // @ts-ignore
    userScoreDisplay.innerText ='Player score = ' + userScore
    const extraInfo = document.querySelector('.winMessage');
    // @ts-ignore
    extraInfo.innerText = 'You played '+ figure +' and won, point for the Player!'



  } else if (winner === "draw") {

    console.log("Draw");
    const extraInfo = document.querySelector('.winMessage');
    // @ts-ignore
    extraInfo.innerText = 'DRAW';


  }
  console.log("round:" + round);
  console.log("userScore: " + userScore);
  console.log("computerScore:" + computerScore);


}