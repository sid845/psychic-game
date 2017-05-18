var wins=0;
	var losses=0;
	var gleft=9;
	var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var guess=letters[Math.floor(Math.random() * 26)];
	
	
	document.onkeyup=function(event)
	{
		var userGuess=event.key;
		var guesses=[ ];
		guesses.push(userGuess);
		var letters2=document.getElementById("demo").innerHTML += guesses+",";
		
		if(guess === userGuess) {
			
			wins++;
            document.getElementById("win").innerHTML = wins;
			gleft=9;
			guesses.length=0;
			document.getElementById("demo").innerHTML =" ";
			guess=letters[Math.floor(Math.random() * 26)];
			console.log(guess);
		}
		if(guess != userGuess) {
			
			gleft--;
			
			document.getElementById("gleft").innerHTML = gleft;
			
			if(gleft<1)
			{
				losses++;
				document.getElementById("loss").innerHTML = losses;
				gleft=9;
				guesses.length=0;
				document.getElementById("demo").innerHTML =" ";
				guess=letters[Math.floor(Math.random() * 26)];
				console.log(guess);
			}
		}
    };