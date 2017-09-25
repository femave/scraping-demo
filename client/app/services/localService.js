angular.module('mainApp')

.factory('localService', function(){

	function dataNames(){
		const names = [
		{
			'id': 0,
			'name': 'La Vanguardia',
			'link': 'lavanguardia'
		},
		{
			'id': 1,
			'name': 'El Pais',
			'link': 'elpais'
		},
		{
			'id': 2,
			'name': 'Omicrono',
			'link': 'omicrono'
		},
		{
			'id': 3,
			'name': 'El Androide Libre',
			'link': 'elandroidelibre'
		}
		]

		return names
	}


	return {dataNames}

})