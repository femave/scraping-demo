angular.module('mainApp')

.config(function ($routeProvider) {
  $routeProvider
	.when('/', {
	  templateUrl: 'app/routes/home/template.html',
	  controller: 'homeController'
})
})