angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
function($scope) {
	// A test variable that will be available to the MainCtrl
	// in the HTML side ;) => refer to it using {{test}}
	$scope.test = "What is up?!";

	// An array of post objects
	$scope.posts = [
		{ title: 'post 1', upvotes: 5},
	  { title: 'post 2', upvotes: 2},
	  { title: 'post 3', upvotes: 15},
	  { title: 'post 4', upvotes: 9},
	  { title: 'post 5', upvotes: 4},
 	];

 	$scope.addPost = function() {
 		// prevent user from submitting a post with a blank title
 		// checks if $scope.title is undefined or it is just blank
 		if (!$scope.title || $scope.title === '') { return; }

 		$scope.posts.push({ title: $scope.title, upvotes: 0 })
 		// clean up the form input
 		$scope.title = '';
 	};
}]);

/* Notes

The $scope variable serves as the bridge between Angular controllers and 
Angular templates. If you want something to be accessible in the template 
such as a function or variable, bind it to $scope.

*/
