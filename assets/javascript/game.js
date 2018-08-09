// opening screen //

// function noAudio() {
//     var x = document.getElementById("intro-song");
//     x.style.visibility = "visible";
// }

// Gets Link for Theme Song
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/sound/ForWhomTheBellTolls.mp3");

// Theme Button
$(".theme-button").on("click", function () {
    audioElement.play();
});
$(".pause-button").on("click", function () {
    audioElement.pause();
});

var wins = 0;
var losses = 0;

function startHangman() {

// hide the picture
    // number player guesses

    var noOfGuesses = 0;

    if (noOfGuesses == 0) {
        document.getElementById("head").style.display = "none";
    
        document.getElementById("body").style.display = "none";
    
        document.getElementById("right_arm").style.display = "none";
   
        document.getElementById("left_arm").style.display = "none";
    
        document.getElementById("right_leg").style.display = "none";
    
        document.getElementById("left_leg").style.display = "none";
    
        document.getElementById("right_eye").style.display = "none";
    
        document.getElementById("left_eye").style.display = "none";
    
        document.getElementById("nose").style.display = "none";
    
        document.getElementById("mouth").style.display = "none";
    }



// word bank

var wordBank = ["scream", "exorcism", "spooky", "gore", "blood"];

// computers choice

var computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log(computerChoice); //remove this

var choiceSpaces = computerChoice.length;

console.log("choice spaces: " + choiceSpaces); //remove this

var choiceSplit = computerChoice.split("");

console.log("choice split: " + choiceSplit); //remove this

// add underscores to match number of letters in computers guess

var playerWord = [];

for (var i = 0; i < choiceSpaces; i++) {

    playerWord.push("_");
}

// ***************************

var gameWord = document.getElementById("word");
 

// show the clue on the screeen, the join() takes the commas out

gameWord.textContent = playerWord.join(" ");


// // number player guesses

// var noOfGuesses = 0;

// empty array to hold the player's guesses

var guess = [];

// container to hold the array on the page

var playerGuesses = document.getElementById("player-guesses");

// player presses key

document.onkeyup = function(event) {

    // key is stored in variable (as lower case???)

    var playerChoice = event.key.toLowerCase();

    // key is tested to ensure it's a valid choice

    if (/^[a-z]+$/i.test(playerChoice)) {

        // valid letter 

        alert("letter chosen!");

        // move chosen letter into empty array guess
        guess.push(playerChoice);

        // display the player's guess on the page

        playerGuesses.textContent = playerChoice;

        //diplay all of player's guesses on the page
        document.getElementById("the-array").innerHTML = guess;
        

        // check to see if letter matches any of the letters in the computer's word
        
        if(choiceSplit.indexOf(playerChoice) != -1) { // should i use < 0???

            alert("yeah!");

            for(var i = 0; i < choiceSpaces; i++) {

                if(choiceSplit[i] == playerChoice) {

                    playerWord[i] = choiceSplit[i];

                }       
                
            }
            gameWord.textContent = playerWord.join(" ");
            console.log(playerWord);

        } else {

            alert("boo");

            var whoops = new Audio("laugh.mp3");
            whoops.play();
            // increases the number of guesses (wrong)

            noOfGuesses++; 
            document.getElementById("no-of-guesses").innerHTML = noOfGuesses + " out of 10";
            console.log(noOfGuesses);

            // show the pictures

            if(noOfGuesses == 1) {
                document.getElementById("head").style.display = "block";
            } else if(noOfGuesses == 2) {
                document.getElementById("body").style.display = "block";
            } else if(noOfGuesses == 3) {
                document.getElementById("right_arm").style.display = "block";
            } else if(noOfGuesses == 4) {
                document.getElementById("left_arm").style.display = "block";
            } else if(noOfGuesses == 5) {
                document.getElementById("right_leg").style.display = "block";
            } else if(noOfGuesses == 6) {
                document.getElementById("left_leg").style.display = "block";
            } else if(noOfGuesses == 7) {
                document.getElementById("right_eye").style.display = "block";
            } else if(noOfGuesses == 8) {
                document.getElementById("left_eye").style.display = "block";
            } else if(noOfGuesses == 9) {
                document.getElementById("nose").style.display = "block";
            } else if(noOfGuesses == 10) {
                document.getElementById("mouth").style.display = "block";
            }

        }

        // check if the player won or lost then play the game again

        if(playerWord.indexOf('_') == -1) {
            alert("win!");
            wins++;
            document.getElementById("wins").textContent = wins;
            console.log("Wins: " + wins);
            startHangman();

        } else if(noOfGuesses > 9) {
            alert("you have lost the game");
            losses++
            document.getElementById("losses").textContent = losses;
            console.log("Losses: " + losses);

            startHangman();
        }
    
    } else {

        // not a valid letter

        alert("Please choose a letter");
    }

}

} // end hangman

startHangman();