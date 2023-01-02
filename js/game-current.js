// Randomly return the computer choice 
function getComputerChoice() {
  let choicesArray = ["rock", "paper", "scissors"]

  return choicesArray[Math.floor(Math.random() * choicesArray.length)]
}

// Play a single round
function playRound(computerChoice, playerChoice) {
  
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      result.textContent = 'Draw! Both players chose Rock'

    } else if (computerChoice === "paper") {
      result.textContent = 'You Lose! Paper beats Rock'

    } else {
      result.textContent = 'You Win! Rock beats Scissors'
    }

  } else if (playerChoice === "paper") {
    if (computerChoice === "paper") {
      result.textContent = 'Draw! Both players chose Paper'

    } else if (computerChoice === "rock") {
      result.textContent = 'You Win! Paper beats Rock'

    } else {
      result.textContent = 'You Lose! Scissors beats Paper'
    }

  } else {
    if (computerChoice === "scissors") {
      result.textContent = 'Draw! Both players chose Scissors'

    } else if (computerChoice === "rock") {
      result.textContent = 'You Lose! Rock beats Scissors'
    
    } else {
      result.textContent = 'You Lose! Rock beats Scissors'
    }
  }
}
const result = document.querySelector('#result')

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
