const VerEx = require('verbal-expressions');
var tester = VerEx()
    .startOfLine()
    .then('http')
    .maybe('s')
    .then('://')
    .maybe('www.')
    .anythingBut(' ')
    .endOfLine();


module.exports = function(request, responed, next) {
	request.haveValidUrlParam = function() {
		const url = request.params.url; 
		return tester.test(url); 
	}

	request.generateShortUrl = function(callback) {
		callback(null, 'some data'); 
	}

	responed.redirectToOriginalUrlFrom = function(generatedShortUrl) {
		// TODO redirect to the original file location from database 
	} 

	next(); 
}
