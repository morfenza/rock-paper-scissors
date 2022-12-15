# rock-paper-scissors
Javascript project from The Odin Project

# Pseudocode
I want to play a Rock-Paper-Scissors game against my computer!

I want to select between "rock", "paper" and "scissors"
The computer must select a random option between "rock", "paper" and "scissors"

The game must have 5 rounds!

WHILE rounds !== 5 DO
  WHEN I select one of the options
    IF my selection beats the computer selection
      I win! ++player_victory
    END
    IF the computer selection beats mine
      I lose! ++computer_victory
    END
  END
  ++rounds
END

Whoever has the most victories wins!

IF player_victory > computer_victory
  I win!
END

IF computer_victory > player_victory
  I lose!
END