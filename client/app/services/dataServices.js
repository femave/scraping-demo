angular.module('mainApp')

.factory('dataServices', function($http){

	function getInfo(newsPage){
		const data = {newsPage}
		const url = `/api/${newsPage.id}`
		return $http.post(url, data)
	}


	return {getInfo}

})