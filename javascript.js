let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return "rock";
    }
    else if (randomNumber < 2 / 3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    let userChoice = prompt("Please write rock, paper, scissors;");
    return userChoice;
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();


    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0) + humanChoice.slice(1)} beats ${computerChoice}.`);
    } 
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0) + computerChoice.slice(1)} beats ${humanChoice}.`);
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);

console.log(`Human Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);




