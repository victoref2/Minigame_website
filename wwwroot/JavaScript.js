// JavaScript.js
document.getElementById('player-rock').addEventListener('click', function () { playGame('rock'); });
document.getElementById('player-paper').addEventListener('click', function () { playGame('paper'); });
document.getElementById('player-scissors').addEventListener('click', function () { playGame('scissors'); });

function playGame(playerChoice) {
    console.log("Game played with:", playerChoice); // Check if function is called
    clearHighlights();
    document.getElementById('player-' + playerChoice).classList.add('player-highlight');

    const computerChoice = getComputerChoice();
    console.log("Computer chose:", computerChoice); // Verify computer's choice
    document.getElementById('computer-' + computerChoice).classList.add('computer-highlight');

    const result = determineWinner(playerChoice, computerChoice);

    document.getElementById('your-choice').textContent = playerChoice;
    document.getElementById('computer-choice').textContent = computerChoice;
    document.getElementById('game-result').textContent = result;
}

function clearHighlights() {
    ['rock', 'paper', 'scissors'].forEach(id => {
        console.log("Clearing highlight for:", id); // Confirm highlights are cleared
        document.getElementById('player-' + id).classList.remove('player-highlight');
        document.getElementById('computer-' + id).classList.remove('computer-highlight');
    });
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function clearHighlights() {
    ['rock', 'paper', 'scissors'].forEach(id => {
        document.getElementById('player-' + id).classList.remove('player-highlight');
        document.getElementById('computer-' + id).classList.remove('computer-highlight');
    });
}
function playGame(playerChoice) {
    console.log("Game played with:", playerChoice); // Check if function is called
    clearHighlights();
    document.getElementById('player-' + playerChoice).classList.add('player-highlight');

    const computerChoice = getComputerChoice();
    console.log("Computer chose:", computerChoice); // Verify computer's choice
    document.getElementById('computer-' + computerChoice).classList.add('computer-highlight');

    const result = determineWinner(playerChoice, computerChoice);

    document.getElementById('your-choice').textContent = playerChoice;
    document.getElementById('computer-choice').textContent = computerChoice;
    document.getElementById('game-result').textContent = result;
}

function clearHighlights() {
    ['rock', 'paper', 'scissors'].forEach(id => {
        console.log("Clearing highlight for:", id); // Confirm highlights are cleared
        document.getElementById('player-' + id).classList.remove('player-highlight');
        document.getElementById('computer-' + id).classList.remove('computer-highlight');
    });
}

