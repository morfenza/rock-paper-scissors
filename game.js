// Randomly return the computer choice 
function getComputerChoice() {
  let choicesArray = ["rock", "paper", "scissors"]

  return choicesArray[Math.floor(Math.random() * choicesArray.length)]

}

console.log(getComputerChoice())