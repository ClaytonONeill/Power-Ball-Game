console.log("its working");

console.log("for the git");


const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,3839,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,6,62,63,64,65,66,67,68,69]

const yourNumbers = [];

const winningNumbers = [];

var ok = document.querySelectorAll("input.play");

console.log(ok);

function randomNumbers() {
	for (n = 1; n <= 6; ++n) {
		// Looks like you do -1 here in order to avoid getting a zero
		// hint: look into Math.ceil()
		var i = Math.floor((Math.random() * (69-n) - 1));
		winningNumbers.push(i);
		document.getElementById("demo").innerHTML = winningNumbers;
		console.log(winningNumbers);
		// since this for loop will run 6 times,
		// so will this call to winner() - is this what you want?
		winner();
	}
}

function winner()	{
	// as an example, logging each time we are inside of this function. How manby times do you want this function to be called?
	console.log('in winner')
	if (winningNumbers.length === yourNumbers.length && JSON.stringify(winningNumbers) === JSON.stringify(yourNumbers))	{
		alert("you win!");
	} else if (winningNumbers.length === yourNumbers.length)	{
		alert("sorry play again");
	}
  }

  // in the above function, looks like you do a JSON.stringify of winningNumbers and of yourNumbers.
  // unfortunately, there is no winning scenario currently, because this comparison:
  // ``` JSON.stringify(winningNumbers) === JSON.stringify(yourNumbers) ```
  // will always come back false
  // hint: try a console.log of each of those on either side of the "===" operator to see what you're comparing to each other.


function reset()	{
	console.log("cleared");
	yourNumbers.length = 0;
	winningNumbers.length = 0;
	document.getElementById("demo").innerHTML = '';
	document.getElementById("numbers-1").value = ''
	document.getElementById("numbers-2").value = ''
	document.getElementById("numbers-3").value = ''
	document.getElementById("numbers-4").value = ''
	document.getElementById("numbers-5").value = ''
	document.getElementById("numbers-6").value = '';
}	

function submitNumbers()	{
	yourNumbers.push(document.getElementById("numbers-1").value);
	yourNumbers.push(document.getElementById("numbers-2").value);
	yourNumbers.push(document.getElementById("numbers-3").value);
	yourNumbers.push(document.getElementById("numbers-4").value);
	yourNumbers.push(document.getElementById("numbers-5").value);
	yourNumbers.push(document.getElementById("numbers-6").value);
	console.log(yourNumbers);
	
}