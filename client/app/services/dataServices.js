angular.module('mainApp')

.factory('dataServices', function($http){

	function getInfo(){
		const url = `/api/laVanguardia`
		return $http.get(url)
	}


	return {getInfo}

})