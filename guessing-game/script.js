let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10)

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    // calculate distance from target, 
    // return if human guess is closer than or equal to computuer guess
    const humanDistance = Math.abs(humanGuess - targetNumber);
    const computerDistance = Math.abs(computerGuess - targetNumber);
    return (humanDistance <= computerDistance)
}

const updateScore = (winner) => {
    if (winner == 'human') {
        humanScore++;
    } 
    if (winner == 'computer') {
        computerScore++;        
    }
}

const advanceRound = () => currentRoundNumber++;

// console.log(humanScore);
// console.log(compareGuesses(5, 7, 7))