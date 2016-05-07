var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var api = require('./app/routing/api-routes.js');
var home = require('./app/routing/html-routes.js');

var app = express();
var PORT = 3000;

//Express app data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Sets up routes
app.use('/', home);
app.use('/', api);

app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})