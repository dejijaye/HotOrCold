var number;
var initguess;
var newguess;
// var diff;

$("#newgame").click(function(){
		$("#submitguess").show("slow");
		$("input").show("slow");
		$("input").val("");
		$("legend").text("Wanna Play?");
		number = parseInt(Math.random() * 101);
		console.log(number);
});


// var displaybar = function(percent) {
// 	var progbarwidth = percent * $("#meterbar").width()/100;
// 	$("meter").width(progbarwidth);
// }

var feedback =function(num)  {
	var previousguess = num;
	$("#submitguess").click(function() {
		 newguess = parseInt($("#guess").val(), 10);
		if ( isNaN(newguess) || newguess === " " || newguess === null || newguess > 101 || guess < 0) {
			$("label").text("Enter a valid format.");
			validate();
		}

		else {
			// var diff = (100 - Math.abs(number - initguess));
			if (newguess === number) {
				$("label").text("Waoh! You guessed right.");
				$("#submitguess").hide("slow");
			}

			else if (Math.abs(number - newguess) < Math.abs(number - previousguess)) {
				$("label").text("You are getting hotter.");
				// displaybar(diff)
				feedback(newguess);
			}

			else if (Math.abs(number - newguess) === Math.abs(number - previousguess)) {
				$("label").text("You are warm.");
				// displaybar(diff);
				feedback(newguess);
			}

			else {
				$("label").text("You are getting colder.");
				// displaybar(diff);
				feedback(newguess);
			}
		}
		// var diff = (100 - Math.abs(number - initguess))
		// displaybar(diff);
	})

}

var validate = function() {
	$("#newgame").click(function() {
		$("label").text("What's your guess.");
		$("#guess").val("");
	})
	$("#submitguess").click(function() {
		initguess = parseInt($("#guess").val(), 10);
		if ( isNaN(initguess) || initguess === " " || initguess === null || initguess > 101 || initguess < 0) {
			
			$("label").text("Enter a valid format.");
			
		}

		else {
			
			if (initguess === number) {
				$("label").text("Waoh! You guessed right.");
				$("#submitguess").hide("slow");
				// displaybar(diff);
			}
			else {
				$("label").text("You are getting hot.");
				// displaybar(diff);
				feedback(initguess);
			}	
		}
		// var diff = (100 - Math.abs(number - initguess));
		// displaybar(diff);
	});
}

validate();