var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var randomLetter;
var guesses = 9;
var lettersGuessed = [];

function letterGenerator() {
	randomLetter = letters[Math.floor(Math.random()*letters.length)];
}
//display variables to html
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guesses").innerHTML = guesses;
document.getElementById("lettersGuessed").innerHTML = lettersGuessed;

//generate random letter and console log it out
letterGenerator();
console.log(randomLetter);

//once key is pressed, function is triggered
document.onkeyup = function(event) {
	var userGuess = event.key.toLowerCase();

	var index = letters.indexOf(userGuess);

	//checks that the user input is a letter
	if (index === -1) {
		//do nothing if non-letter is pressed

	//checks if user already guessed that letter
	} else if (lettersGuessed.indexOf(userGuess) > -1) {
		//do nothing if letter already guessed

	//if user input is a letter AND not already guessed, then	
	} else {
	//push entered letter to array
	lettersGuessed.push(userGuess);

	//if user guess equals random letter wins increments by 1 and game resets
	if (userGuess === randomLetter) {
		wins += 1;
		guesses = 9;
		lettersGuessed = [];
		letterGenerator();
		console.log(randomLetter);
	//if guess doesn't equal random letter and guesses > 2, gueses decreases by 1
	} else if (guesses > 1) {
		guesses -= 1;
	//if 1 guess left and guess is incorrect, game resets
	} else {
		losses += 1;
		guesses = 9;
		lettersGuessed = [];
		letterGenerator();
		console.log(randomLetter);
	}

	//display variables to html
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("guesses").innerHTML = guesses;
	document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
	}
}