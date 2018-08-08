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

// add underscores to match number of letters in computers guess

var progressWord = [];

for (var i = 0; i < choiceSpaces; i++) {

    progressWord.push("_");
}

// ***************************
//var fabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];



// ***************************

var gameWord = document.getElementById("word");
// var str = gameWord.textContent = computerChoice;
// var res = str.replace(computerChoice, "_");
// gameWord.textContent = res;
 

// show the clue on the screeen, the join() takes the commas out

gameWord.textContent = progressWord.join(" ");


// number player guesses

var noOfGuesses = 0;

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

                    progressWord[i] = choiceSplit[i];

                }
                
                
            }
            gameWord.textContent = progressWord.join(" ");
            console.log(progressWord);

        } else {

            alert("boo");

            // increases the number of guesses (wrong)

            noOfGuesses++; 
            document.getElementById("no-of-guesses").innerHTML = noOfGuesses;
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

        // check if the player won

        if(progressWord.indexOf('_') == -1) {
            alert("win!");
        } else if(noOfGuesses > 9) {
            alert("you have lost the game");
            
        }


        // if ($.inArray(playerChoice, choiceSplit) >= 0) {
            
        //     console.log(playerChoice, choiceSplit);
        
        // } else {
            
        //     alert("booo");

        // }

    } else {

        // not a valid letter

        alert("Please choose a letter");
    }

}