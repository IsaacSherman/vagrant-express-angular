
//Dependencies ======

var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var Config = require('./config.js')();
var app = express();

//App Middleware ======

app.use(express.static(__dirname + '/www'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.all('/*', function(req, res) {
	res.sendFile(__dirname + '/www/index.html');
})

//Starting our app ======

app.listen(Config.Express.port, function() {
	console.log('Running on port ' + Config.Express.port);
});
