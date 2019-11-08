const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput == 'rock') {
        return 'rock'
    } else if (userInput == 'paper') {
        return 'paper'
    } else if (userInput == 'scissors') {
        return 'scissors'
    } else if (userInput == 'bomb') {
        return 'bomb'
    } else {
        console.log('Invalid entry. (Choose: rock, paper, or scissors.)');
    }
} 

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][randomNumber]
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game result is a tie!';
    } else if (userChoice == 'rock' && computerChoice == 'paper') {
        return 'The computer wins the game.'
    } else if (userChoice == 'paper' && computerChoice == 'scissors') {
        return 'The computer wins the game.'
    } else if (userChoice == 'scissors' && computerChoice == 'rock') {
        return 'The computer wins the game'
    } else if (userChoice = 'bomb' ) {
        return 'The user cheats using the bomb!! BOOOOOOOM!!!'
    } else {
        return 'The user wins the game!'
    }
}

const playGame = () => {
    const userChoice = getUserChoice('BOMB');
    const computerChoice = getComputerChoice()
    console.log(`User chooses ${userChoice} and computer chooses ${computerChoice}.`)
    console.log(`${determineWinner(userChoice, computerChoice)}`);
}

playGame()