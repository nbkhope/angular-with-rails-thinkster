angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
function($scope) {
	// A test variable that will be available to the MainCtrl
	// in the HTML side ;) => refer to it using {{test}}
	$scope.test = "What is up?!";

	// An array of posts
	$scope.posts = [
		'post 1',
	  'post 2',
	  'post 3',
	  'post 4',
	  'post 5'
	];
}]);
