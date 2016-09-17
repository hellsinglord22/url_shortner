//^_^ Dependencies injection ^_^ //
const express  = require('express');
const urls     = require('./model/urls');
const app      = express();


const PORT = 5000;

// ^_^ Routing ^_^ //
app.get('/new/:originlUrl', function(request, responed) {

});

app.get('/:shortUrl', funciton(request, responed) {
});

app.listen(PORT);
