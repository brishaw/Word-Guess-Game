// opening screen //



// word bank

var wordBank = ["scream", "exorcism", "spooky", "gore", "blood"];

// computers choice

var computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log(computerChoice); //remove this

var choiceSpaces = computerChoice.length;

console.log("choice spaces: " + choiceSpaces); //remove this

var choiceSplit = computerChoice.split("");

console.log("choice split: " + choiceSplit); //remove this

// player guesses

var noOfGuesses = 0;

var playerGuesses = document.getElementById("player-guesses");

var theArray = document.getElementById("the-array");

var guess = [];

    for (i = 0; i <= choiceSpaces; i++) {
            
        if (noOfGuesses <= choiceSpaces) {

            document.onkeyup = function(event) {
                
                var playerChoice = event.key;

                guess.push(playerChoice);

                playerGuesses.textContent = playerChoice;

                document.getElementById("the-array").innerHTML = guess;

                noOfGuesses++;

                console.log("number of guesses: " + noOfGuesses); //remove this
                
                console.log("guesses: " + guess); //remove this
                
            }
        
        } else if(noOfGuesses > choiceSpaces) {

            console.log("you lose"); //remove this

        }
        
    }

    


    



