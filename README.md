## What is this repo or project?
My Hangman game

## How does it work?
1. The program chooses a random word from a created [word bank array]. In this game, 5 words were chosen from The Horror Lorem Ipsum Text Generator.
2. A player presses a key to start the game which will also be the first letter chosen for their guess.
3. If the guessed letter is part of the hidden word, that corresponding blank will be replaced with that letter and the turn will not count.
4. Once the player guesses the entire hidden word before using all 10 turns, the player wins that round and the "Wins" counter will increment by 1. The       game will then start a new round, clearing the board and offering a new challenge word.
5. If the guessed letter is not part of the hidden word, the turn will be counted and added to the "guesses" count. A body part will also be added to the display. 
6. When the player reaches 10 turns, the body parts will fully reveal the hanged man - and the player will have lost the round. The "Losses" counter will     increment by 1.

## Who will use this repo or project?
**Anyone** who enjoys the sport of hangman or enjoys guessing words.

## What is the goal of this project?
To learn how to `pragmatically` and `pedantically` code javascript so that the player enjoys an entertaining game.

