
 const prompt = require('prompt-sync')();

 let rock="rock"

 let paper="paper"

 let scissors="scissors"

 playGame();



    function getComputerChoice(){
    let choice =Math.floor(Math.random()*3);
    if (choice===0) {
        return rock
    } else if (choice===1){
        return paper
    } else if (choice>=2) {
        return scissors
        }
    }


function getUserChoice() {
    let userInput = prompt("Pick rock, paper or scissors ");
   return userInput.toLowerCase()
}



function chooseWinner() {
    const userChoice = getUserChoice()
    const computerChoice = getComputerChoice()

    if ((userChoice === rock && computerChoice === rock) ||
        (userChoice === paper && computerChoice === paper) ||
        (userChoice===scissors && computerChoice === scissors))  {
        return "It's a draw!"

    } else if ( (userChoice === rock && computerChoice === paper) ||
                (userChoice === paper && computerChoice === scissors) ||
                (userChoice === scissors && computerChoice === rock)){
        return "You lose :("

    } else if ( (userChoice === rock && computerChoice === scissors) ||
                (userChoice === paper && computerChoice === rock) ||
                (userChoice === scissors && computerChoice === paper))
        return "You win! :)"

}

function playGame() {

    

    let userScore = 0
    let computerScore = 0
    const rounds = prompt("How many rounds you wanna play? ")

    for (let i=1; i<=(rounds); i++) {
        console.log("Round:" + i)
        const winner=  chooseWinner()

        if (winner === "You lose :(") {

            computerScore = computerScore + 1
            console.log("point for computer")

        } else if (winner === "You win! :)") {

            userScore = userScore + 1
            console.log("point for player!")

        } else if (winner === "It's a draw!") {

          console.log("Draw")


        }

        console.log("userScore: "+ userScore)
        console.log("computerScore:" + computerScore)
    }
    if (userScore>computerScore) {
        console.log("Congratulations! You win!")
    } else {
        console.log("Im sorry, You lose :(")

    }
}