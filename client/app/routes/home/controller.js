angular.module('mainApp')

.controller('homeController', function ($scope, localService, twitterService) {
	
	$scope.names = localService.dataNames()

	twitterService.getOauth()
	.then((data)=>{
		console.log(data)
	})


})