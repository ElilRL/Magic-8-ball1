let compChoice;
let userChoice;
let randomNum = 5;


// Random Numbers (Inclusive 0-Exclusive range)
// FUNCTION: Generate a random number between 0 and 3
function getRandomNum(low, high){
    return Math.floor(Math.random() * (high - low)) + low;
}
// include 3 exclude 10
// 3 - 9
3 - 10
0.7


randomNum = getRandomNum(0,3);
// TEST:
console.log(randomNum);


// Switch statements
function chooseMove(){
    switch(RandomNum){
        case 0:
            return  "rock";
            break;
        case 1:
            return  "paper";
            break;
        case 2:
            return  "scissors";
            break;
        default:
            return  "error";
            break;
             
    }
}
// Comparisons
if (randomNumber === 0) {
    eightBall = 'It is cartain';
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
    eightball = 'Reply hazy try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
    eightBall = 'Signs point to yes';
}
// console Logs


//PLAY!
userChoice = chooseMove(getRandomNum(0,3));
console.log ("User Chose: " + userChoice);


compChoice = chooseMove(getRandomNum(0,3));
console.log("Computer Chose: " + compChoice);


winner = determineWinner();
console.log("The winner is..." + winner);