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
		if (url) {
			return tester.test(url); 
		}
		return false; 
	}

	request.generateShortUrl = function(callback) {
		// TODO generateShortUrl
	}

	responed.redirectToOriginalUrlFrom = function(generatedShortUrl) {
		// TODO redirect to the original file location from database 
	} 

	next(); 
}
