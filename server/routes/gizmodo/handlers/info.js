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
			
				const img = data.find('img')
				const img2 = `${img}`.match(/http[^")]+/g)
				const pic = data.find('picture')
				const pic2 = `${pic}`.match(/http[^")]+/)

				title.push(data.find('h1').text())
				href.push(`${data}`.match(/http[^")]+/g))
				if (img2 != null) imgSrc.push(img2.join())
				else imgSrc.push(pic2.join())
				console.log(title)

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