var fs = require("fs");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");


function choose() {
inquirer.prompt([
	
	{
	name: "Pick",
	type: "list",
	message: "Pick an option.",
	choices: ["Basics Flashcard", "Cloze Flashcard", "All Flashcards"] 
	},

	])

.then(function(log){

	if (log.choices === "Basic Flashcard") {
		console.log("You're making " + log.choices)
		basic();
	} else if (log.choices === "Cloze Flashcard") {
		console.log("You're making " + log.choices)
		cloze();
	} else if (log.choices === "All Flashcards") {
		console.log("Here are " + log.choices)
		allCards();
	}
})

};

function basic () {
	
}