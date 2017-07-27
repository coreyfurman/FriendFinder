var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express App

var app = express();
var PORT = 3000; // process.env.PORT || 

// Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/:operandA/:operator/:operandB", (req, res) => {
	let result = false;
	let operator = req.params.operator;

	switch (operator){
		case "multiply":
			result = operandA * operandB;
		break;


		case "add":
			result = operandA + operandB;
		break;

	}
	if (result)
		res.end(result.toString());

});

app.listen(3000);
