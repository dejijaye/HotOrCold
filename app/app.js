
// var previousguess;
// var guess;

// window.onload = function () {
// 	var number =parseInt(Math.random() * 100);
// 	alert(number);
// 	// var guess = prompt("What is your guess?");

var number = parseInt(Math.random() * 101);
// var guess;


var feedback = function (num) {
	var previousguess = num;
	var newguess = parseInt(prompt("whats your guess?","Enter a number between 1 and 100"));
	if(newguess === number) {
		alert("Weldone!!! You guessed right.");
	}
	else if (Math.abs(number - newguess) < Math.abs(number - previousguess)) {
		alert("You are hotter.");
		feedback(newguess);
	}
	else {
		alert("You are colder.");
		feedback(newguess);
	}
}

var checkguess = function() {
	var guess = parseInt(prompt("what's your guess?","Enter a number between 1 and 100"));
	if ( guess !== " " && guess !== null && guess < 101 && !(guess < 0) ) {
		if (guess === number) {
				alert("Waoh! You guessed right.");
			}	
		else {
			alert("You are hot. Please Guess again.");
			 feedback(guess);
		}
	}

	else {
	alert("Please Match the requested format.");
	checkguess();
	// var guess = parseInt(prompt("whats your guess?","Enter a number between 1 and 100"));
	}
}

alert(number);
checkguess();
// var guess = parseInt(prompt("whats your guess?","Enter a number between 1 and 100"));
// if (!(isNaN(guess)) && guess === " " && guess === null && guess < 101 ) {
// 	checkguess();
// }

// else {
// 	alert("Please Match the requested format.");
// 	var guess = parseInt(prompt("whats your guess?","Enter a number between 1 and 100"));
// 	checkguess();
// }
