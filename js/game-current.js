// Randomly return the computer choice 
function getComputerChoice() {
  let choicesArray = ["rock", "paper", "scissors"]

  return choicesArray[Math.floor(Math.random() * choicesArray.length)]
}

// Play a single round
function playRound(computerChoice, playerChoice) {
  
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("Draw! Both players chose Rock")
      return 0

    } else if (computerChoice === "paper") {
      console.log("You Lose! Paper beats Rock")
      return 2

    } else {
      console.log("You Win! Rock beats Scissors")
      return 1
    }

  } else if (playerChoice === "paper") {
    if (computerChoice === "paper") {
      console.log("Draw! Both players chose Paper")
      return 0

    } else if (computerChoice === "rock") {
      console.log("You Win! Paper beats Rock")
      return 1

    } else {
      console.log("You Lose! Scissors beats Paper")
      return 2
    }

  } else {
    if (computerChoice === "scissors") {
      console.log("Draw! Both players chose Scissors")
      return 0

    } else if (computerChoice === "rock") {
      console.log("You Lose! Rock beats Scissors")
      return 2
    
    } else {
      console.log("You Win! Scissors beats Paper")
      return 1
    }
  }
}

