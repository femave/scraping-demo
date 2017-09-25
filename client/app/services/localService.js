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
		}
		]

		return names
	}


	return {dataNames}

})