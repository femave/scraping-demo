angular.module('mainApp')

.controller('newsPageController', function ($scope, $routeParams, dataServices) {
	
	const newsPage = $routeParams

	dataServices.getInfo()
	.then(notices =>{
		$scope.data = notices.data
		console.log($scope.data)
	})

})