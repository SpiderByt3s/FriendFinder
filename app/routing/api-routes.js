var express = require('express');
var path = require('path');
var friendsArray = require('../data/friends.js');

// Sets up routing for server app
// ============================================================
var router = express.Router();

router.post('/api/friendsAPI', function(req, res){
	friendsArray.push(req.body);
		res.json(friendsArray);
});

router.get('/api/friendsAPI', function(req, res){
	res.json(friendsArray);
});

module.exports = router;

