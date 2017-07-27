var bffData = require('../data/friends.js');
var path = require('path');


var difference = 0;

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

	app.post('/api/friends', function(req, res){

		var bff = {
			name: "",
			image: "",
			friendDifference: 100
		};
//// Take the data for each friend and compare the difference between each person. Choose the closest match and send to modal for display.

	});