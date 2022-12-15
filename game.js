// Randomly return the computer choice 
function getComputerChoice() {
  let choicesArray = ["rock", "paper", "scissors"]

  return choicesArray[Math.floor(Math.random() * choicesArray.length)]
}

function playRound(computerChoice, playerChoice) {
  
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      return "Draw! Both players chose Rock"

    } else if (computerChoice === "paper") {
      return "You Lose! Paper beats Rock"
    
    } else {
      return "You Win! Rock beats Scissors"
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "paper") {
      return "Draw! Both players chose Paper"

    } else if (computerChoice === "rock") {
      return "You Win! Paper beats Rock"
    
    } else {
      return "You Lose! Scissors beats Paper"
    }
  } else {
    if (computerChoice === "scissors") {
      return "Draw! Both players chose Scissors"

    } else if (computerChoice === "rock") {
      return "You Lose! Rock beats Scissors"
    
    } else {
      return "You Win! Scissors beats Paper"
    }
  }
}

let computerChoice = getComputerChoice()
let playerChoice = "rock"

console.log(playRound(computerChoice, playerChoice))