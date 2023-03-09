const choice = ["agate", "onyx", "jasper"]

const choiceButtons = document.querySelectorAll('.choice');
const resetButton = document.querySelector('.reset');
let playerScore = parseInt(0);
let computerScore = parseInt(0);

resetButton.getElementsByClassName.visibility = 'invisible';

function gameEnd(playerScore, computerScore) {
    if (playerScore === 5 && computerScore < 5) {
        const winGame = document.createElement("p");
        winGame.textContent = "You have won, Computer's rock has shattered into pieces..."
        document.getElementById('endGame').appendChild(winGame);
        document.getElementById('agate').disabled = true;
        document.getElementById('onyx').disabled = true;
        document.getElementById('jasper').disabled = true;
    } else {
        const loseGame = document.createElement("p");
        loseGame.textContent = "Unfortunatly, Computer's rock has smashed yours to dust..."
        document.getElementById('endGame').appendChild(loseGame);
        document.getElementById('agate').disabled = true;
        document.getElementById('onyx').disabled = true;
        document.getElementById('jasper').disabled = true;
    }
    document.getElementById('reset').style.visibility = 'visible';
    resetButton.addEventListener('click', () => {
        window.location.reload();
    });
    
}

function playGame () {
    for (let i = 0; i < choiceButtons.length; i++) {
         choiceButtons[i].addEventListener('click', function(e) {
            const playerChoice = e.target.id;
            const choice = ["agate", "onyx", "jasper"];
            const randomChoiceId = [Math.floor(Math.random() * choice.length)];
            const computerChoice = choice[randomChoiceId];
            if (playerScore === 5 || computerScore === 5) {
                return gameEnd(playerScore, computerScore);
            }else if (playerChoice === computerChoice) {
                
                div.textContent = ("Its a tie, computer chose " + computerChoice);
                document.getElementById('scoreboardPlayer').textContent = `Your score: ${playerScore}`;
                document.getElementById('scoreboardComputer').textContent = `Computer score: ${computerScore}`;

            } else if (playerChoice === "agate" && computerChoice === "jasper" || playerChoice === "jasper" && computerChoice === "onyx" || playerChoice === "onyx" && computerChoice === "agate") {
                div.textContent = ("You win this round, computer chose " + computerChoice);
                playerScore++;
                document.getElementById('scoreboardPlayer').textContent = `Your score: ${playerScore}`;
                document.getElementById('scoreboardComputer').textContent = `Computer score: ${computerScore}`;

            } else {
                div.textContent = ("You lose this time, computer chose " + computerChoice);
                computerScore++;
                document.getElementById('scoreboardPlayer').textContent = `Your score: ${playerScore}`;
                document.getElementById('scoreboardComputer').textContent = `Computer score: ${computerScore}`;

            }
      
        });
    
    }
   
}




playGame();



