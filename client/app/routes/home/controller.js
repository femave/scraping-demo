angular.module('mainApp')

.controller('homeController', function ($scope, localService) {
	
	$scope.names = localService.dataNames()


})