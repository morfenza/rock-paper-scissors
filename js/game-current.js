// Randomly return the computer choice 
function getComputerChoice() {
  let choicesArray = ["rock", "paper", "scissors"];

  return choicesArray[Math.floor(Math.random() * choicesArray.length)];
}

// Play a single round
function playRound(computerChoice, playerChoice) {
  
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      resultDiv.textContent = 'Draw! Both players chose Rock';

    } else if (computerChoice === "paper") {
      resultDiv.textContent = 'You Lose! Paper beats Rock';
      computerCounter++;
      cCounterSpan.textContent = computerCounter;

    } else {
      resultDiv.textContent = 'You Win! Rock beats Scissors';
      humanCounter++;
      hCounterSpan.textContent = humanCounter;

    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "paper") {
      resultDiv.textContent = 'Draw! Both players chose Paper';

    } else if (computerChoice === "rock") {
      resultDiv.textContent = 'You Win! Paper beats Rock';
      humanCounter++;
      hCounterSpan.textContent = humanCounter;

    } else {
      resultDiv.textContent = 'You Lose! Scissors beats Paper';
      computerCounter++;
      cCounterSpan.textContent = computerCounter;

    }
  } else {
    if (computerChoice === "scissors") {
      resultDiv.textContent = 'Draw! Both players chose Scissors';

    } else if (computerChoice === "rock") {
      resultDiv.textContent = 'You Lose! Rock beats Scissors';
      computerCounter++;
      cCounterSpan.textContent = computerCounter;

    } else {
      resultDiv.textContent = 'You Win! Scissors beats Paper';
      humanCounter++;
      hCounterSpan.textContent = humanCounter;

    }
  }
}

function checkVictory() {
  if (humanCounter == 5) {
    resultDiv.textContent = "Congratulations! You've won the game!!!"
    computerCounter = 0;
    humanCounter = 0;
    cCounterSpan.textContent = computerCounter;
    hCounterSpan.textContent = humanCounter;

  } else if (computerCounter == 5) {
    resultDiv.textContent = "Oh no! You've lost the game!!"
    computerCounter = 0;
    humanCounter = 0;
    cCounterSpan.textContent = computerCounter;
    hCounterSpan.textContent = humanCounter;
  }
}

const resultDiv = document.querySelector('#result');
const hCounterSpan = document.querySelector('#h-counter');
const cCounterSpan = document.querySelector('#c-counter');

let computerCounter = 0;
let humanCounter = 0;


const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
  playRound(getComputerChoice(), 'rock')
  checkVictory()
}); 

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
  playRound(getComputerChoice(), 'paper')
  checkVictory()
}); 

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
  playRound(getComputerChoice(), 'scissors')
  checkVictory()
}); 
