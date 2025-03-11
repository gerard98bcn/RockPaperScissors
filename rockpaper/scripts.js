// Define the variables needed
    // Possible Choices
    const choices = ["rock","paper","scissors"];
    //Skibid Toilet XD
    const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
    const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
    const resultDisplay = document.getElementById("resultDisplay");
    const scoreboardDisplay = document.getElementById("scoreboardDisplay");
    const computerScoreDisplay = document.getElementById("computerScoreDisplay");
    const playerScoreDisplay = document.getElementById("playerScoreDisplay");
    const tieScoreDisplay = document.getElementById("tieScoreDisplay");
    
    let playerScore ="0";
    let computerScore ="0";
    let tieScore ="0";

// Create a Function to play the game
function playGame(playerChoice) {
    // generate a random choice by the computer
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    if (computerChoice === playerChoice) {
        result = "It's a tie!";
    }
    else {
        switch (playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You LOSE!";                
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "You LOSE!";
                break;
        }
    }

    // Always remove both classes before adding a new one
    resultDisplay.classList.remove("neon-green", "neon-red");

    // Reset animation by forcing a reflow (repainting)
    void resultDisplay.offsetWidth; // This triggers a reflow, causing the animation to restart

    switch(result) {
        case "You win!":
            playerScore++;
            resultDisplay.classList.add("neon-green"); // Add the green neon effect
            break;
        case "You LOSE!":
            computerScore++;
            resultDisplay.classList.add("neon-red"); // Add the red neon effect
            break;
        case "It's a tie!":
            tieScore++;
            resultDisplay.classList.add("neon-red"); // Ties also use red neon
            break;
    }
    
    console.log("The computer picked: "+ computerChoice + " Result: " + result);

    // Display player and computer choices
    switch(playerChoice) {
        case "rock":
            playerChoiceDisplay.textContent = "Rock 🪨";
            break;
        case "paper":
            playerChoiceDisplay.textContent = "Paper 📄";
            break;
        case "scissors":
            playerChoiceDisplay.textContent = "Scissors ✂️";
            break;       
    }

    switch(computerChoice) {
        case "rock":
            computerChoiceDisplay.textContent = "🪨 Rock";
            break;
        case "paper":
            computerChoiceDisplay.textContent = "📄 Paper";
            break;
        case "scissors":
            computerChoiceDisplay.textContent = "✂️ Scissors";
            break;       
    }


    //Display the scoreboard of computer,player and no of ties
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    tieScoreDisplay.textContent = tieScore;

    // Display the result of the match
    resultDisplay.textContent = result;
}

function animateClash() {
    const leftEmoji = document.querySelector('.left');
    const rightEmoji = document.querySelector('.right');

    leftEmoji.style.transform = 'translateX(100px)';
    rightEmoji.style.transform = 'translateX(-100px)';

    setTimeout(() => {
        leftEmoji.style.transform = 'translateX(0)';
        rightEmoji.style.transform = 'translateX(0)';
    }, 500);
}

setInterval(animateClash, 2000);