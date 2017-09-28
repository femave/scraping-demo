angular.module('mainApp')

.factory('localService', function(){

	function dataNames(){
		const names = [
		{
			'id': 0,
			'name': 'La Vanguardia',
			'link': 'lavanguardia',
			'src' : 'http://img.kiosko.net/2017/03/03/es/lavanguardia.750.jpg'
		},
		{
			'id': 1,
			'name': 'El Pais',
			'link': 'elpais',
			'src' : 'http://a2012.kiosko.net/11/07/es/elpais.750.jpg'
		},
		{
			'id': 2,
			'name': 'Omicrono',
			'link': 'omicrono',
			'src' : 'https://www.foxinthenet.com/public/uploads/portfolios/omicrono_0.png'
		},
		{
			'id': 3,
			'name': 'El Androide Libre',
			'link': 'elandroidelibre',
			'src' : 'https://lh3.googleusercontent.com/yEuI2-aZ69LfsJDD0izJ2q5CKvt-rKpiE_tg6aG6nplkoFauHxKYoaN6v8ubLPztqxyM=h900'
		},
		{
			'id': 4,
			'name': 'Genbeta',
			'link': 'genbeta',
			'src' : 'https://i.blogs.es/47b8ab/genbeta-portada/400_300.jpg'
		},
		{
			'id': 5,
			'name': 'Gizmodo',
			'link': 'gizmodo',
			'src' : 'https://i.kinja-img.com/gawker-media/image/upload/s--DzL0Llva--/c_scale,fl_progressive,q_80,w_800/owmkgotelvm5kehatvly.png'
		}
		]

		return names
	}


	return {dataNames}

})