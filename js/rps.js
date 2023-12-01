var userName= "";
userName ? console.log("Hello, " + userName + "!") : console.log("Hello!")

var userQuestion = "Sure"
userQuestion ? console.log("Wanna play a game?," + userQuestion + "!") : console.log("Wanna play agame?")

// Generate a random number between 0 and 2
var user= "";

var randomNumber = Math.floor(Math.random() * 3);

if (randomNumber === 0) {
    user = 'Rock';
} else if (randomNumber === 1) {
    user = 'Paper';
} else if (randomNumber === 2) {
    user = 'scissors';
}
console.log("Your pick: ", user)

var computer="";


var randomNumber = Math.floor(Math.random() * 3);

if (randomNumber === 0) {
    computer = 'Rock';
} else if (randomNumber === 1) {
    computer = 'Paper';
} else if (randomNumber === 2) {
    computer = 'scissors';
}
console.log("computer pick: ", computer)


switch(choice){
    case 0:
        user = "rock";
        break;
    case 1:
        user = "paper";
        break;
   case 2:
            user = "scissors";
            break;
    default:
        user = "error";
        break;
}

console.log("Comp Choice: " + compChoice);


var winner;

if(userChoice === "rock" && compChoice === "paper"){
    winner = "computer";
} else if (userChoice === "paper" && compChoice === "rock"){
    winner = "user";
}
/// 