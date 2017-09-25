const cheerio = require('cheerio');

function info (req, res){

	req.webParsed(function (err, data) {

		if(err) return res.send(err);

		const $ = cheerio.load(data)

		let newsData =[]
		let title = []
		let href = []
		let imgSrc = []

		$('article').not('.homeNormalNoMobile').filter(function(){

			const data = $(this)
			
			const img = data.find('img')
			const img1 = `${img}`.match(/src=(["'])(.*?)\1/g)
			const img2 = `${img1}`.match(/[^"]+/g)
			const link = data.find('h2')
			if (`${link}`.match(/"[^]+"/g) != null) link2 = `${link}`.match(/"[^]+"/g).join().split(/"/)				

				title.push(data.find('h2').text())

			if (link2[3] != "headline") {
				let link3 = 'https://www.genbeta.com' + link2[3]
				href.push(link3.split())
			}
			else{
				href.push(`${link}`.match(/http[^"]+/g))
			}
			console.log(img2)
			imgSrc.push(img2[1])

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