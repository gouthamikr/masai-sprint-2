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

function generatingButtons() {

}

function checkingIfGameWon() {
    if (wordStatus === answer) {
      document.getElementById('keyboard').innerHTML = 'You Won!!!';
    }
}

function checkingIfGameLost() {
    if (mistakes === maxWrong) {
      document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
      document.getElementById('keyboard').innerHTML = 'You Lost!!!';
    }
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}