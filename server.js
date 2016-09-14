//^_^ Dependencies injection ^_^ // 
const express = require('express'); 
const app     = express();

// ^)^ some constants for my server //
const PORT = 5000; 


app.get('/', function(request, response) {
    response.send('shit is working'); 
}); 


app.listen(PORT); 


console.log('Listening on port ' + PORT); 

