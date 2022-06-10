function computerPlay() {
    // const CHOICES = ['Rock', 'Paper', 'Scissors'];
    // const choice = Math.floor(Math.random() * 3);
    // return CHOICES[choice];
    return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
}

function capitalize(inputString) {
    return inputString.substring(0, 1).toUpperCase() + 
           inputString.toLowerCase().substring(1);
}

function playRPSRound(playerChoice, computerChoice) {
    const playerChoiceCleaned = capitalize(playerChoice);

    if (!new Set(['Rock', 'Paper', 'Scissors']).has(playerChoiceCleaned))
        return 'Invalid input! (Case insensitive "Rock, Paper, or Scissors")';

    if (playerChoiceCleaned === computerChoice)
        return `It's a tie! Both played ${playerChoiceCleaned}`;
    else if (playerChoiceCleaned === 'Rock' && computerChoice === 'Scissors' ||
             playerChoiceCleaned === 'Paper' && computerChoice === 'Rock' ||
             playerChoiceCleaned === 'Scissors' && computerChoice === 'Paper')
        return `You win! ${playerChoiceCleaned} beats ${computerChoice}`;
    else
        return `You lose! ${computerChoice} beats ${playerChoiceCleaned}`;
}

function game() {
    let playerScore = 0;
    let numberOfTies = 0;
    let roundResult = '';

    for (let i = 1; i <= 5; i++) {
        playerChoice = prompt(`Rock Paper Scissors Round ${i}:`);
        roundResult = playRPSRound(playerChoice, computerPlay());
        console.log(roundResult);

        if (roundResult.includes('win'))
            playerScore += 1;
        else if (roundResult.includes('tie'))
            numberOfTies += 1;

        console.log(`Your score is: ${playerScore}`);
    }

    const winPercentage = 100 * playerScore / (5 - numberOfTies);
    const overallResult = winPercentage > 50 ? 'win' : 
                          winPercentage < 50 ? 'lose' : 'tie';

    console.log(`You ${overallResult} overall!`);
}

game();