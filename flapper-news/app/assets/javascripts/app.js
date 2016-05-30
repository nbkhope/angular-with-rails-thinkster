angular.module('flapperNews', ['ui.router', 'templates'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

	$stateProvider
	  .state('home', {
	  	url: '/home',
	  	templateUrl: 'home/_home.html',
	  	controller: 'MainCtrl',
	  	resolve: {
	  		// By using the resolve property in this way, we are ensuring that 
	  		// anytime our home state is entered, we will automatically query all 
	  		// posts from our backend before the state actually finishes loading.
	  		postPromise: ['posts', function(posts) {
	  			return posts.getAll();
	  		}] 
	  	}
	  })
	  .state('posts', {
	  	url: '/posts/{id}', // {id} is a route parameter
	  	templateUrl: 'posts/_posts.html',
	  	controller: 'PostsCtrl',
	  	resolve: {
	  		// Only after the request has returned will the state finish loading.
	  		post: ['$stateParams', 'posts', function($stateParams, posts) {
	  			return posts.get($stateParams.id);
	  		}]
	  	}
	  });

	// Use otherwise() to redirect unspecified routes.
	$urlRouterProvider.otherwise('home');

}]);
