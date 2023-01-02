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

    } else if (computerChoice === "paper") {
      console.log("You Lose! Paper beats Rock")

    } else {
      console.log("You Win! Rock beats Scissors")
    }

  } else if (playerChoice === "paper") {
    if (computerChoice === "paper") {
      console.log("Draw! Both players chose Paper")
      return 0

    } else if (computerChoice === "rock") {
      console.log("You Win! Paper beats Rock")

    } else {
      console.log("You Lose! Scissors beats Paper")
    }

  } else {
    if (computerChoice === "scissors") {
      console.log("Draw! Both players chose Scissors")

    } else if (computerChoice === "rock") {
      console.log("You Lose! Rock beats Scissors")
    
    } else {
      console.log("You Win! Scissors beats Paper")
    }
  }
}

const rockBtn = document.querySelector('#rock')
rockBtn.addEventListener('click', () => {
  playRound(getComputerChoice(), 'rock')
}); 

const paperBtn = document.querySelector('#paper')
paperBtn.addEventListener('click', () => {
  playRound(getComputerChoice(), 'paper')
}); 

const scissorsBtn = document.querySelector('#scissors')
scissorsBtn.addEventListener('click', () => {
  playRound(getComputerChoice(), 'scissors')
}); 
