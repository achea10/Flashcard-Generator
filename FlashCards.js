var fs = require("fs");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");

choose ();
function choose() {
inquirer.prompt([
	
	{
	name: "Pick",
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
		return false;
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
		return false;
		}
	},

	]) .then(function(output) {
	var newBasic = new BasicCard (output.front, output.back);
	newBasic.create();
	console.log("Front of the card is: " + output.front + "\r\nBack of the card is: " + output.back);
})

};