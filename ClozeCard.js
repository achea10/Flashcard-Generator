var fs = require("fs");

function ClozeCard (text, cloze) {
	if (this instanceof ClozeCard) {
		this.text = text;
		this.cloze = cloze;	
	} else {
		return new ClozeCard (text, cloze);
	}
};

module.exports = ClozeCard;

