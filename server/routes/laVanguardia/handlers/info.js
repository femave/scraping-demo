const request = require('request');
const cheerio = require('cheerio');


	//Scraping webs

	url = 'http://www.lavanguardia.com/'

	function webScraped (callback){ 
		request(url, function(error, response, body){

			// let title, href, imgSrc
			// const infoWeb = {title :"", href : "", imgSrc : ""}

			// if(!error){
			// 	const $ = cheerio.load(body)

			// 	$('.story-header-title-link').filter(function(){

			// 		const data = $(this)

			// 		title = data.text()
			// 		href = `${data}`.match(/http:[^"]+/g)

					// console.log(title, href)

				// })

			// 	$('figure').filter(function(){

			// 		const data = $(this)

			// 		imgSrc = `${data}`.match(/data-src-md=(["'])(.*?)\1/g)

			// 		info.imgSrc = imgSrc

			// 	})		

			// }


			result = JSON.stringify(body);
			return callback(false, body);	


		})
	}

	function info (req, res){
		// console.log(data)
		webScraped(function (err, data) {
			// console.log('1')
			if(err) return res.send(err);

			const $ = cheerio.load(data)
			// console.log('2')
			let title = []
			let href = []
			let imgSrc = []

			$('.story-header-title-link').filter(function(){

				const dataTitle = $(this)

				title.push( dataTitle.text())
				href.push(`${dataTitle}`.match(/http:[^"]+/g))

			})

			$('.story-figure').filter(function(){

				const dataImg = $(this)

				imgSrc.push(`${dataImg}`.match(/data-src-md=(["'])(.*?)\1/g))

				// console.log('2.8')

			})

			res.send({
				'title': title,
				'href' : href,
				'imgSrc': imgSrc
			})

			
		})

	}




	module.exports = info