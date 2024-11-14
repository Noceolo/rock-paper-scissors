
var humanScore = 0;                      // initialize the human score to 0
var computerScore = 0;                   // initialize the computer score to 0




function getComputerChoice () {
    var randomNumber = Math.random();
    if (randomNumber <= 0.3) {
        return "rock";
    }else if (randomNumber >= 0.7) {
        return "scissors";
    }else {
        return "paper"
    }
}



function getHumanChoice () {
    var humanPrompt = prompt("Rock, Paper or Scissors ?");
    
    if (humanPrompt === null ) { // answer in case user don't enter anything or blank space (baby)
        alert("Maybe another time then....");
        
    }else if (humanPrompt === "") {
        alert("You need to enter your choice");
        getHumanChoice();
    }else if (!/[a-zA-Z]+$/.test(humanPrompt)) { // makes sure the user only input text
        alert("You need to only enter letters");
        getHumanChoice();
    }else {
        humanPrompt = humanPrompt.toLowerCase(); // set the string to lower case only
        if (humanPrompt != "rock" && humanPrompt != "paper" && humanPrompt != "scissors") {  //making sure the prompt is one of the possible choice, using && instead of || because otherwise its always false.
            alert("You need to choose between rock, paper and scissors")
            getHumanChoice();
        }else {
            return humanPrompt;
        };
    };   
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a draw ${humanChoice} vs ${computerChoice}`); // back tick for expression inside of string

    }else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You loose, paper beats rock");
        computerScore++;

    }else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win, rock beats scissors");
        humanScore++;

    }else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You loose, scissors beats paper");
        computerScore++;

    }else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win, paper beats rock");
        humanScore++;

    }else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You loose, rock beats scissors");
        computerScore++;

    }else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win, scissors beats paper");
        humanScore++;
    }

    if (humanScore >= 5){           
        document.getElementById("result").textContent = "The Player wins, congrats";
    
    }else if(computerScore >= 5){
        document.getElementById("result").textContent = "The Player looses, boo";
        
    };

}


function playGame() {
     
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(humanScore + "vs" + computerScore);
}

const rockbtn = document.querySelector("#rockbtn");
rockbtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
    document.getElementById('playerPara').textContent = "Player score : " + humanScore;
    document.getElementById('computerPara').textContent = "Computer score : " + computerScore;
});

const paperbtn = document.querySelector("#paperbtn");
paperbtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
    document.getElementById('playerPara').textContent = "Player score : " + humanScore;
    document.getElementById('computerPara').textContent = "Computer score : " + computerScore;
});

const scissorsbtn = document.querySelector("#scissorsbtn");
scissorsbtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
    document.getElementById('playerPara').textContent = "Player score : " + humanScore;
    document.getElementById('computerPara').textContent = "Computer score : " + computerScore;
});










