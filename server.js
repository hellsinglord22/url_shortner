//^_^ Dependencies injection ^_^ // 
const express = require('express'); 
const mongo   = require('mongodb').MongoClient; 
const app     = express();

// ^)^ some constants for my server //
const PORT = 5000; 
const CONNECTION_STRING = 'mongodb://localhost:27017/url'; 
const COLLECTION_NAME = 'urls';  

app.get('/', function(request, response) {



}); 


app.listen(PORT); 


console.log('Listening on port ' + PORT); 

