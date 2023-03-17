var PlaysArr = ["rock", "paper", "scissors"];
var Plays = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
};
var rockPlayButton = document.querySelector("#rockPlay");
var paperPlayButton = document.querySelector("#paperPlay");
var scissorsPlayButton = document.querySelector("#scissorsPlay");
// rockPlayButton.addEventListener("click", getUserChoice(Plays.rock));
// @ts-ignore
rockPlayButton.addEventListener("click", function () { return playGame(Plays.rock); });
// @ts-ignore
paperPlayButton.addEventListener("click", function () { return playGame(Plays.paper); });
// @ts-ignore
scissorsPlayButton.addEventListener("click", function () { return playGame(Plays.scissors); });
function getComputerChoice() {
    var choice = Math.floor(Math.random() * 3);
    return PlaysArr[choice];
}
function chooseWinner(userChoice) {
    // const userChoice = getUserChoice();
    // console.log("dskjfhdsfdsh" + userChoice);
    var computerChoice = getComputerChoice();
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
var userScore = 0;
var computerScore = 0;
var round = 0;
function playGame(figure) {
    var roundsDEBUG = 1;
    // @ts-ignore
    var rounds = parseInt(roundsDEBUG);
    round += 1;
    var winner = chooseWinner(figure);
    if (winner === "You lose :(") {
        computerScore = computerScore + 1;
        console.log("point for computer");
    }
    else if (winner === "You win! :)") {
        userScore = userScore + 1;
        console.log("point for player!");
    }
    else if (winner === "It's a draw!") {
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
