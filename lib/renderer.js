const settings = require('../settings'); 


module.exports = function(request, responed, next) {

	responed.renderHelpPage = function() {
    responed.sendFile(settings.PROJECT_DIR + '/views/index.html'); 
	}

	next(); 
}


