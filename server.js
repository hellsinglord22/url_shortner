//^_^ Dependencies injection ^_^ //
const express   = require('express');
const urls      = require('./model/urls');
const constants = require('./lib/constants'); 
const app       = express();


console.log('The vlaue of the constant: ', constants.PORT);

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
 
});
 /**
 * route to FIND SHORT URL AND REDIRECT TO ORIGINAL ONE
 */
app.get('/:shortUrl', function(request, responed) {

});

// everything is working //
console.log('Listening on port ', constants.PORT);
app.listen(constants.PORT);
