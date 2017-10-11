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
	fs.appendFile("log.txt", output.front + ", " + output.back + "\r\n", function(error, output){
		if (error) {
			return console.log(error);
		}
	});
	
		console.log("Front of the card is: " + output.front + "\r\nBack of the card is: " + output.back);
		next();
	})

};

function cloze () {
inquirer.prompt ([ 
	{
	name: "text",
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
	name: "cloze",
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
	
	]).then(function(output) {
		var newCloze = new ClozeCard (output.text, output,cloze);
		var partial = output.text.replace(output.cloze, "......")
		fs.appendFile("log.txt", output.text + "," + output.cloze + "\r\n", function(error, output){
			if (error) {
				return console.log(error);
			}
		})
			console.log("Front of the card is: " + output.front + "\r\nBack of the card is: " + output.back);
			next();
	}) 
};

function allCards () {
	fs.readFile("log.txt", "utf8", function(error, output) {
		output = output.split (",");
		if (error) throw error;
		console.log("\n\r" + output);
	})
};

function next () {
	inquirer.prompt ([
		{
		name: "whatNext",
		message: "What do you want to do next",
		type: "list",
		choices: ["Show all cards", "Make another card", "All Done"] 
		}

	]).then(function(output) {
		if (output.choices === "Show all cards") {
			console.log("Here you go!" + output.choices);
			allCards();
		} else if (data.choices === "Make another card") {
			console.log("Here you go!" + data.choices);
			choose();
		} else if (data.choices === "All Done") {
			console.log("Bye!");
			return;
		}
	});
};




















