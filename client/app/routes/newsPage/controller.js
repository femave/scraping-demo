angular.module('mainApp')

.controller('newsPageController', function ($scope, $routeParams, dataServices) {
	
	const newsPage = $routeParams

	console.log(dataServices.getInfo())


})