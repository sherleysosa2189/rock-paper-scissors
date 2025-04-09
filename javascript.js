let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    // Get the result text element, score element, and winner element
    const resultText = document.getElementById("resultText");
    const scoreText = document.getElementById("score");
    const winnerText = document.getElementById("winner");

    // Check the result of the round
    if (humanChoice === computerChoice) {
        resultText.textContent = `It's a tie! Both chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultText.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultText.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
    }

    // Update the score display
    scoreText.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;

    // Check if anyone has reached 5 points
    if (humanScore === 5) {
        winnerText.textContent = "Congratulations! You won the game!";
        resetGame(); // Reset the game for a new round
    } else if (computerScore === 5) {
        winnerText.textContent = "Oops! The computer won the game!";
        resetGame(); // Reset the game for a new round
    }
}

function resetGame() {
    // Reset scores and update the score display
    humanScore = 0;
    computerScore = 0;
    document.getElementById("score").textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
    document.getElementById("resultText").textContent = "Choose your option!";
    document.getElementById("winner").textContent = "";
}

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll(".buttons button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            const humanChoice = button.textContent.toLowerCase();
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        });
    });
});






/*function playGame() 

    const humanChoice1 = getHumanChoice();
    const computerChoice1 = getComputerChoice();
    playRound(humanChoice1, computerChoice1);

    const humanChoice2 = getHumanChoice();
    const computerChoice2 = getComputerChoice();
    playRound(humanChoice2, computerChoice2);

    const humanChoice3 = getHumanChoice();
    const computerChoice3 = getComputerChoice();
    playRound(humanChoice3, computerChoice3);

    const humanChoice4 = getHumanChoice();
    const computerChoice4 = getComputerChoice();
    playRound(humanChoice4, computerChoice4);

    const humanChoice5 = getHumanChoice();
    const computerChoice5 = getComputerChoice();
    playRound(humanChoice5, computerChoice5);

    console.log(`Final Human Score: ${humanScore}`);
    console.log(`Final Computer Score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You Win!");
    } else if (computerScore > humanScore) {
        console.log("You Lose! Computer Wins!");
    } else {
        console.log("It is a tie! Let's Play Again.");
    }
}

playGame(); */