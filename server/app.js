const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app = express();
const port = '3000'


app.get('/scrape', function (req, res){

	//Scraping webs

	url = 'http://www.lavanguardia.com/'

	request(url, function(error, response, html){

		if(!error){
			const $ = cheerio.load(html)

			let title, notice, description
			const json = {title :"", notice : "", description : ""}

			$('.story-header-title-link').filter(function(){

				const data = $(this)
				// console.log(`DATA OF THE HTML ${data}`)

				title = data.text()
				// const href = `${data}`.split(/[href=(["'])(.*?)\1]/g)
				const href = `${data}`.match(/http:[^"]+/g)

				console.log(title, href)


			})
		}


	})

	// res.send(json)

})

app.listen(port)

console.log(`Scrapping in port ${port}`)

exports = module.exports = app