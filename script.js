var programming_languages = [
	"python",
	"javascript",
	"mongodb",
	"java",
	"html",
	"css",
	"c",
	"csharp",
	"php",
    "sql",
    "react",
    "redux",
    "bootstrap"
]

var answer = '';
var maxWrong = 6;
var mistakes = 0;
var guessed = [];
var wordStatus=null;

function randomWord() {
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
}

function howToPlay(){
    alert("Try to guess one secret word one letter at a time! If you guess an incorrect letter,your man will getting ready to hang To win, spell the word before you run out of guesses because you have only 6 guesses!")
}

function generatingButtons() {
    var buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
          <button
            class="btn btn-lg btn-primary m-2"
            id='` + letter + `'
            onClick="handleGuess('` + letter + `')"
          >
            ` + letter + `
          </button>
        `).join('');
    
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function checkingIfGameWon() {
    if (wordStatus === answer) {
      document.getElementById('keyboard').innerHTML = 'You Won!!! Man Saved!!!';
    }
}

function handleGuess(chosenLetter) {
    if(guessed.indexOf(chosenLetter) === -1) {
        guessed.push(chosenLetter);
    }
    else{
        null;
    }

    document.getElementById(chosenLetter)
  
    if (answer.indexOf(chosenLetter) >= 0) {
      guessedWord();
      checkingIfGameWon();
    }
    else if (answer.indexOf(chosenLetter) === -1) {
      mistakes++;
      updatingMistakes();
      checkingIfGameLost();
      updateHangmanPicture();
    }
}

function guessedWord() {
    wordStatus = answer.split('').map( letter => ( guessed.indexOf(letter) >= 0 ? letter : " __ " ) ).join('');
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updatingMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}

function checkingIfGameLost() {
    if (mistakes === maxWrong) {
      document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
      document.getElementById('keyboard').innerHTML = 'You Lost!!! Man Hanged!!';
    }
}

function updateHangmanPicture() {
    document.getElementById('hangmanPic').src = './resources/' + mistakes + '.jpg';
}

function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './resources/0.jpg';
  
    randomWord();
    guessedWord();
    updatingMistakes();
    generatingButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generatingButtons();
guessedWord();
