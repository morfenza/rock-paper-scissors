// Randomly return the computer choice 
function getComputerChoice() {
  let choicesArray = ["rock", "paper", "scissors"]

  return choicesArray[Math.floor(Math.random() * choicesArray.length)]
}

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

function game() {
  console.log("Welcome! Let's play a Rock-Paper-Scissors game!")
  console.log("The game consists in 5 round battles against the computer! Good luck!")

  let keepGoing = true
  while (keepGoing) {
    
    let playerVictory = 0
    let computerVictory = 0
    let roundState = 0
    let playerChoice = ""
    let tryAgain = true

    for (let i = 0; i < 5; i++) {
      
      tryAgain = true
      while (tryAgain) {
        playerChoice = prompt("Select between 'rock', 'paper' and 'scissors'!").toLowerCase()

        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
          tryAgain = false
        }
      }
      
      roundState = playRound(getComputerChoice(), playerChoice)

      switch (roundState) {
        case 0:
          break;
      
        case 1:
          ++playerVictory
          break;

        case 2:
          ++computerVictory
          break;
      }
    }

    if (playerVictory > computerVictory) {
      alert("You won the game! Congrats!")
    } else if (computerVictory > playerVictory) {
      alert("The computer won the game! Try again!")
    } else {
      alert("The game ended in a draw! Wow! You both won! (that's how this works)")
    }

    aux = prompt("Do you want to play again? (y/n)", '').toLowerCase()

    if (aux !== "y") {
      keepGoing = false
    }
  }
}

game()