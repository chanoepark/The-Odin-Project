function computerPlay() {
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
    let roundResult = '';
    let playerChoice = '';

    const body = document.querySelector('body');
    const buttons = document.querySelectorAll('button');
    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#computerScore');
    const resultDiv = document.createElement('div');
    const resultText = document.createElement('p');
    const winnerText = document.createElement('p');

    buttons.forEach(button => 
        button.addEventListener('click', e => {
            if (parseInt(playerScore.textContent) >= 5 || 
                parseInt(computerScore.textContent) >= 5)
                return;
            
            playerChoice = e.target.textContent;
            roundResult = playRPSRound(playerChoice, computerPlay());
            resultText.textContent = roundResult;

            if (roundResult.includes('win'))
                playerScore.textContent = parseInt(playerScore.textContent) + 1;
            else if (roundResult.includes('lose'))
                computerScore.textContent = parseInt(computerScore.textContent) + 1;

            if (playerScore.textContent === '5')
                winnerText.textContent = 'You win overall!';
            else if (computerScore.textContent === '5')
                winnerText.textContent = 'You lose overall!';
            
            resultText.appendChild(winnerText);
        })
    );

    resultDiv.appendChild(resultText);
    body.appendChild(resultDiv);
}

game();