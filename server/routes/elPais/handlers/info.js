const cheerio = require('cheerio');

	function info (req, res){

		req.webParsed(function (err, data) {

			if(err) return res.send(err);

			const $ = cheerio.load(data)

			let newsData =[]
			let title = []
			let href = []
			let imgSrc = []

			$('section').not('#clasificados').find('article').filter(function(){

				const data = $(this)
			
				const img = `${data}`.match(/[^"(]+(?:jpg|png)/g)
				const link = data.find('h2')

				title.push(data.find('h2').text())
				if (`${link}`.match(/http[^")]+/g) != null ) href.push(`${link}`.match(/http[^")]+/g))
				else {
					const linkToPush =  `https://elpais.com` + `${link}`.match(/[^"]+html/g)
					href.push(linkToPush.split())
				}
				imgSrc.push(img[0])

				// console.log(href)

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