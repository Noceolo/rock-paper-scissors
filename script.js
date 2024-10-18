

function randomInteger(min, max) {       // function to generate a random number between two limits, included
    return Math.floor(Math.random() * (max - min +1)) + min;
}

var computerNumber = randomInteger(1,3); // store the choice between 1 and 3 
var computerChoice;                      // will store the return string corresponding 
var lowerCaseText;                       // user prompt in all lower case





 function transform (randomNumber) {     // convert ther number into the string corresponding
    
    if (randomNumber === 1) {
        computerChoice = ('Rock');
    } else if (randomNumber === 2) {
        computerChoice = ('Paper');
    } else if (randomNumber === 3) {
        computerChoice = ('Scissors');
    };
    return computerChoice;
}




transform(computerNumber);              // apply the transform function to the computer number
console.log(computerChoice);


// function capitalizeFirstLetter () {

function getHumanChoice() {
    let ask = confirm("Do you want to play rock paper scissors ?");
    if(ask === true) {
        alert ("Yay, let's play");
        humanPrompt();
    } else {
        alert ("Maybe another time....")
    }
}



// var humanPrompt = function() {    // function that ask the user for his choice and return it lower case only
function humanPrompt() { 
    var userText = prompt("Rock, Paper or Scissors ?")

        if (userText === null ) { // answer in case user don't enter anything or blank space (baby)
            alert("Maybe another time then....");
            
        }else if (userText === "") {
            alert("You need to enter your choice")
            humanPrompt() 
        }else if (!/[a-zA-Z]+$/.test(userText)) { // makes sure the user only input text
            alert("You need to only enter letters")
            humanPrompt()
        }else {
            let lowerCaseText = userText.toLowerCase(); // set the string to lower case only
            
        };      
}



getHumanChoice();
alert(check);



