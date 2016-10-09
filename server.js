//^_^ Dependencies injection ^_^ //
const express   					 = require('express');
const urls      					 = require('./model/urls');
const settings 						 = require('./settings'); 
const renderer     				 = require('./lib/renderer'); 
const shortUrlMicroService = require('./lib/shortUrlMicroService'); 
const app       					 = express();

app.use(renderer); 
app.use(shortUrlMicroService); 


app.get('/', function(request, responed) {
		responed.renderHelpPage();
});


app.get('/new/:url(*)', function(request, responed) {
	if (request.haveValidUrlParam()) {
		request.generateShortUrl(function(error, generatedShortUrl) {
			if (error) responed.send(error);  
			else responed.send(generatedShortUrl); 
		});
	} else {
		responed.send('An Error'); 
	}


});

app.get('/:generatedShortUrl', function(request, responed) {
	responed.redirectToOriginalUrlFrom(request.params.generatedShortUrl); 
});

// everything is working //
console.log('Listening on port ', settings.PORT);
app.listen(settings.PORT);
