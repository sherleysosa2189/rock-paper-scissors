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

function getHumanChoice() {
    let userChoice = prompt("Please write rock, paper, or scissors:");
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!" + " " +computerChoice);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
    }
}

function playGame() {
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

playGame();





