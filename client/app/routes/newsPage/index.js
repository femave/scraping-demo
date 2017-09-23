angular.module('mainApp')

.config(function ($routeProvider) {
  $routeProvider
	.when('/news/:id', {
	  templateUrl: 'app/routes/newsPage/template.html',
	  controller: 'newsPageController'
})
})