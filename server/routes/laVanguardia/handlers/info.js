const request = require('request');
const cheerio = require('cheerio');


	//Scraping webs

	url = 'http://www.lavanguardia.com/'

	function webScraped (callback){ 
		request(url, function(error, response, body){

			return callback(false, body);	

		})
	}

	function info (req, res){

		webScraped(function (err, data) {

			if(err) return res.send(err);

			const $ = cheerio.load(data)

			let newsData =[]
			let title = []
			let href = []
			let imgSrc = []

			$('.story-header-title-link').filter(function(){

				const dataTitle = $(this)				

				title.push( dataTitle.text())
				href.push(`${dataTitle}`.match(/http:[^"]+/g))		

			})


			$('figure').not('.linkable').filter(function(){

				const dataImg = $(this)
				const imgFirst = `${dataImg}`.match(/data-src-md=(["'])(.*?)\1/g)
				if(imgFirst !== null){
					const imgUrl = imgFirst.join().match(/[^"]+/g)
					imgSrc.push(imgUrl[1])
				}else {
					imgSrc.push(imgFirst)
				}

			})

			$('.story').filter(function(){

				const dataTitle = $(this)				
				// console.log(dataTitle)

				title =  dataTitle.text()
				console.log(title)
				// href.push(`${dataTitle}`.match(/http:[^"]+/g))		

			})


			const getObjectData = function(dataT, dataHref, dataImg){

				for ( var i = 0; i < dataT.length; i++){
					objx = {}
					objx.title = dataT[i]					
					objx.href = dataHref[i]
					objx.imgSrc = dataImg[i]
					newsData.push(objx)
				}
			}

			getObjectData(title, href, imgSrc)

			res.send({
				newsData
			})

			
		})

	}




	module.exports = info