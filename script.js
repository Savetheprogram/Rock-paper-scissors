var PlaysArr = ["rock", "paper", "scissors"];
var Plays = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
};
var rockPlayButton = document.querySelector("#rockPlay");
var paperPlayButton = document.querySelector("#paperPlay");
var scissorsPlayButton = document.querySelector("#scissorsPlay");
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
    var computerChoice = getComputerChoice();
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
var userScore = 0;
var computerScore = 0;
var round = 0;
function playGame(figure) {
    var roundsDEBUG = 1;
    // @ts-ignore
    var rounds = parseInt(roundsDEBUG);
    round += 1;
    var winner = chooseWinner(figure);
    if (winner === "lose") {
        computerScore = computerScore + 1;
        console.log("point for computer");
        var computerScoreDisplay = document.querySelector('.computerScore');
        // @ts-ignore
        computerScoreDisplay.innerText = 'Computer score = ' + computerScore;
        var extraInfo = document.querySelector('.winMessage');
        // @ts-ignore
        extraInfo.innerText = 'You played ' + figure + ' and lost, point for the computer!';
    }
    else if (winner === "win") {
        userScore = userScore + 1;
        console.log("point for player!");
        var userScoreDisplay = document.querySelector('.playerScore');
        // @ts-ignore
        userScoreDisplay.innerText = 'Player score = ' + userScore;
        var extraInfo = document.querySelector('.winMessage');
        // @ts-ignore
        extraInfo.innerText = 'You played ' + figure + ' and won, point for the Player!';
    }
    else if (winner === "draw") {
        console.log("Draw");
        var extraInfo = document.querySelector('.winMessage');
        // @ts-ignore
        extraInfo.innerText = 'DRAW';
    }
    console.log("round:" + round);
    console.log("userScore: " + userScore);
    console.log("computerScore:" + computerScore);
}
