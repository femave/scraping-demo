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

			let title, href, imgSrc
			const json = {title :"", href : "", imgSrc : ""}

			$('.story-header-title-link').filter(function(){

				const data = $(this)
				// console.log(`DATA OF THE HTML ${data}`)

				title = data.text()
				// const href = `${data}`.split(/[href=(["'])(.*?)\1]/g)
				href = `${data}`.match(/http:[^"]+/g)

				json.title = title
				json.href = href

				// console.log(title, href)


			})

			$('figure').filter(function(){

				const data = $(this)
				// console.log(`DATA OF THE HTML (img) ${data}`)

				imgSrc = `${data}`.match(/data-src-md=(["'])(.*?)\1/g)
				// console.log(`IMG SRC ====> ${imgSrc}`)
				json.imgSrc = imgSrc

			})

			// console.log(json)

		}


	})

	// res.send(json)

})

app.listen(port)

console.log(`Scrapping in port ${port}`)

exports = module.exports = app