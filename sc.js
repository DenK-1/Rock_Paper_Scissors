

let playGame = function () {

    let humanScore = 0;
    let computerScore = 0;
    let getComputerChoice = function () {
        let choise = Math.random()
        if (choise < 0.33) {
            return "rock"
        } else if (choise >= 0.33 && choise < 0.66) {
            return "paper"
        } else if (choise >= 0.66) {
            return "scissors"
        }
    }

    let getHumanChoice = function () {
        return prompt("rock paper scissors")
    }

    //  let humanSelect = getHumanChoice()
    //  let computerSelect = getComputerChoice()

    let playRound = function () {
        let human = getHumanChoice().toUpperCase()
        let comp = getComputerChoice().toUpperCase()
        console.log(`human - ${human}, comp - ${comp} `)
        if (human == "ROCK" && comp == "PAPER") {
            computerScore++
        }
        if (human == "ROCK" && comp == "SCISSORS") humanScore++
        if (human == "PAPER" && comp == "SCISSORS") computerScore++
        if (human == "PAPER" && comp == "ROCK") humanScore++
        if (human == "SCISSORS" && comp == "ROCK") computerScore++
        if (human == "SCISSORS" && comp == "PAPER") humanScore++
    }

    for (let i = 0; i < 5; i++) {
        playRound()
    }
    console.log(`score: human - ${humanScore}, comp - ${computerScore}`)
    return humanScore > computerScore ? "human" :
        computerScore > humanScore ? "computer" : "draw"
}
console.log(playGame())