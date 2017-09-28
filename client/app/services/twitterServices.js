angular.module('mainApp')

.factory('twitterService', function($http){

	function getOauth(){
		const url = 'https://api.twitter.com/oauth/authenticate'
		return $http.post(url)
	}


	return {getOauth}

})