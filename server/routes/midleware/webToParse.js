const request = require('request');


function webScraped(req,res,next){
	
	const webDirection = req.body.newsPage.id

	switch(webDirection) {
		case "lavanguardia":
			url = 'http://www.lavanguardia.com/'
			break;
		case "omicrono":
			url = 'http://omicrono.elespanol.com/'
			break;
		case "elandroidlibre":
			url = 'https://elandroidelibre.elespanol.com/'
			break;
		case "elpais":
			url = 'https://elpais.com/'
			break;
	}

	req.webParsed = function webToScrape (callback){ 
		request(url, function(error, response, body){

			return callback(false, body);	

		})
	}

	next()
}

module.exports = webScraped