//array of songs
var songs=["Bohemian Rhapsody", "Dont stop me now", "The show must go on", "We are the champions", "we will rock you", "somebody to love", "another one bites the dust", "killer queen", "under pressure", "I want to break free", "radio ga ga", "i want it all"];




//variables for counting
var chosenWord ="";
var letterInWord = [];
var underscores = 0; 
var rightGuesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 1;
var numGuesses = 9; 

//number of _ for each song selected
function startGame (){
wrongGuesses = [];
console.log("You have chosen " + wrongGuesses + "wrong letters.");
numGuesses = 9; 
rightGuesses = [];
//choose random song from the array above
chosenWord = songs[Math.floor(Math.random ()*songs.length)];
letterInWord = chosenWord.split("");
underscores = letterInWord.length; 
console.log(chosenWord);
console.log(underscores)

for (var i = 0; i < underscores; i++){
    rightGuesses.push("_");
}
console.log(rightGuesses);
document.getElementById("wordBlank").innerHTML = rightGuesses.join(" ");
document.getElementById("attemptsLeft").innerHTML = numGuesses;
}

// check if the letters match the array

function checkLetter (letter){
    var letterInSong = false; 

    for (var i = 0; i < underscores; i++){
        if(chosenWord [i] === letter){
            letterInSong = true; 
        }
    }
    if (letterInSong){
        for ( i = 0; i < underscores; i++){
            if(chosenWord [i] === letter){
                rightGuesses[i] = letter; 
            }
        }
    }
    else{
        numGuesses --;
        wrongGuesses.push(letter)
    }


// once you guess one song
document.getElementById("wordBlank").innerHTML = rightGuesses.join(" ");
document.getElementById("attemptsLeft").innerHTML = numGuesses.join(" ");
document.getElementById("wrongGuess").innerHTML = wrongGuesses.join(" ");

console.log(letterInWord);
console.log(rightGuesses);

if(letterInWord.join(" ") === rightGuesses.join(" ")){
    winCounter++;
    alert ("YOU WIN");
    document.getElementById("winCounter").innerHTML = winCounter;
    startGame();
}
else if(numGuesses === 0){
    document.getElementById("lossCounter").innerHTML = lossCounter++;
    document.getElementById("wrongGuess").innerHTML = "";
    alert ("You lost... try again!");
    startGame();
}
}

startGame();
document.onkeyup = function(event){
    var letterGuesses = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("You typed the letter: " + letterGuesses)
    checkLetter(letterGuesses)
    roundComplete();
}







