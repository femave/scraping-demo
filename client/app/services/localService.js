angular.module('mainApp')

.factory('localService', function(){

	function dataNames(){
		const names = [
		{
			'id': 0,
			'name': 'La Vanguardia',
			'link': 'laVanguardia'
		},
		{
			'id': 1,
			'name': 'El Pais',
			'link': 'elPais'
		},
		{
			'id': 2,
			'name': 'Omicrono',
			'link': 'omicrono'
		}
		]

		return names
	}


	return {dataNames}

})