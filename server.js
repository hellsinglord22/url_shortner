//^_^ Dependencies injection ^_^ //
const express  = require('express');
const urls     = require('./model/urls');
const app      = express();

// Constants for the road a head,  //
const PORT = 5000;


// x.x Server side verification x.x //
app.param('originalUrl', function (request, responed, next, originalUrl) {
	request.originalUrl = originalUrl; 
	next();
});

app.param('shortUrl', function (request, responed, next, shortUrl) {
	next(); 
});





// ^_^ Routing ^_^ //
/**
 * route ( HOW TO USE ) page !!!
 */
app.get('/', function(request, responed) {
    responed.sendFile(__dirname + '/views/index.html'); 
});


/**
 * route to CREATE NEW SHORT URL
 */
app.get('/new/:originalUrl', function(request, responed) {
	const debugMessage = request.originalUrl; 
	responed.send('The URL you did enter is ' + debugMessage); 
});
 /**
 * route to FIND SHORT URL AND REDIRECT TO ORIGINAL ONE
 */
app.get('/:shortUrl', function(request, responed) {

});

// everything is working //
console.log('Listening on port ', PORT);
app.listen(PORT);
