var express = require('express');
var path = require('path');
var mysql = require('mysql')

var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'friendfinder'
});


var tables = [];

// Sets up routing for server app
// ============================================================
var router = express.Router();

router.post('/survey', function(req, res){
	
	var newFriend = req.body;

	console.log(newFriend);

	var name = newFriend.name;
	var photo = newFriend.photo;
	var score = newFriend.score;


	tables.push(newFriend);

	res.json(newFriend);

	connection.query('INSERT INTO friends(name, photo, score) VALUES ("'+name+'","'+photo+'","'+score+'")', function(err){
		console.log(err);
	});
});

router.get('/api/friendsAPI', function(req, res){
	res.json(newFriend);
});

module.exports = router;

