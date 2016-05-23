angular.module('flapperNews', ['ui.router', 'templates'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

	$stateProvider
	  .state('home', {
	  	url: '/home',
	  	templateUrl: 'home/_home.html',
	  	controller: 'MainCtrl'
	  })
	  .state('posts', {
	  	url: '/posts/{id}', // {id} is a route parameter
	  	templateUrl: 'posts/_posts.html',
	  	controller: 'PostsCtrl'
	  });

	// Use otherwise() to redirect unspecified routes.
	$urlRouterProvider.otherwise('home');

}]);
