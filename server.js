//^_^ Dependencies injection ^_^ //
const express   = require('express');
const urls      = require('./model/urls');
const settings = require('./settings'); 
const renderer  = require('./lib/renderer'); 
const app       = express();



app.use(renderer); 



app.get('/', function(request, responed) {
		responed.renderHelpPage(); 
});


app.get('/new/:originalUrl', function(request, responed) {
 
});

app.get('/:shortUrl', function(request, responed) {

});

// everything is working //
console.log('Listening on port ', settings.PORT);
app.listen(settings.PORT);
