var fs = require("fs");

function BasicCard (front, back) {
	if (this instanceof BasicCard) {
		this.front = front;
		this.back = back;
	} else {
		return new BasicCard (front, back); 
	}
}; 

module.exports = BasicCard;