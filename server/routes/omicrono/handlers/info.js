const cheerio = require('cheerio');

	function info (req, res){

		req.webParsed(function (err, data) {

			if(err) return res.send(err);

			const $ = cheerio.load(data)

			let newsData =[]
			let title = []
			let href = []
			let imgSrc = []

			$('article').filter(function(){

				const data = $(this)
			
				const img = `${data}`.match(/[^"(]+jpg/g)

				title.push(data.find('h2').text())
				href.push(`${data}`.match(/http[^")]+/g))
				imgSrc.push(img[0])

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