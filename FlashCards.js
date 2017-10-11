var fs = require("fs");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");

choose ();
function choose() {
inquirer.prompt([
	
	{
	name: "choices",
	type: "list",
	message: "Pick an option.",
	choices: ["Basic Flashcard", "Cloze Flashcard", "All Flashcards"] 
	},

	])

.then(function(data){

	if (data.choices === "Basic Flashcard") {
		console.log("You're making " + data.choices);
		basic();
	} else if (data.choices === "Cloze Flashcard") {
		console.log("You're making " + data.choices);
		cloze();
	} else if (data.choices === "All Flashcards") {
		console.log("Here are " + data.choices);
		allCards();
	}
})

};

function basic () {
inquirer.prompt([
	{
	name: "front",
	message: "What do you want in the front of the card?",
	type: "input",
	validate: function(output) {
		if (isNaN(output) === false) {
			console.log("Not valid try again.");
			return false;
			}
		return true;
		}
	},

	{
	name: "back",
	message: "What do you want in the back of the card?",
	type: "input",
	validate: function(output) {
		if (isNaN(output) === false) {
			console.log("Not valid try again.");
			return false;
			}
		return true;
		}
	},

	]) .then(function(output) {
	var newBasic = new BasicCard (output.front, output.back);
	fs.appendFile("log.txt", output.front + ", " + output.back + "\r\n", function(err, output){
	if (err) {
		return console.log(err);
	}
});
	console.log("Front of the card is: " + output.front + "\r\nBack of the card is: " + output.back);
})

};