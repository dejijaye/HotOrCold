var number;
var initguess;
var newguess;

$("#newgame").click(function(){
		$("#submitguess").show("slow");
		$("input").show("slow");
		$("input").val("");
		$("legend").text("Wanna Play?");
		number = parseInt(Math.random() * 101);
		console.log(number);
});

var feedback =function(num)  {
	var previousguess = num;
	$("#submitguess").click(function() {
		 newguess = parseInt($("#guess").val(), 10);
		if ( isNaN(newguess) || newguess === " " || newguess === null || newguess > 101 || guess < 0) {
			$("label").text("Enter a valid format.");
			validate();
		}

		else {

			if (newguess === number) {
				$("label").text("Waoh! You guessed right.");
				$("#submitguess").hide("slow");
			}

			else if (Math.abs(number - newguess) < Math.abs(number - previousguess)) {
				$("label").text("You are getting hotter.");
				feedback(newguess);
			}

			else if (Math.abs(number - newguess) === Math.abs(number - previousguess)) {
				$("label").text("You are warm.");
				feedback(newguess);
			}

			else {
				$("label").text("You are getting colder.");
				feedback(newguess);
			}
		}
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
			}
			else {
				$("label").text("You are getting hot.");
				feedback(initguess);
			}	
		}
	});
}

validate();