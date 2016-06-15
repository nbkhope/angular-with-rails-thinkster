angular.module('flapperNews')
.controller('PostsCtrl', [
'$scope',
'posts', // factory
'post', // directly injected from resolve in the state config
function($scope, posts, post) {

	// Retrieve a post from the array of posts using the {id} in the URL as the index
	//$scope.post = posts.posts[$stateParams.id];
	$scope.post = post; 

	$scope.addComment = function() {
		if ($scope.body === '') { return; }

		posts.addComment(post.id, {
			body: $scope.body,
			author: 'user'
		}).success(function(comment) {
			$scope.post.comments.push(comment)

			// Clean up the new-comment form
			$scope.body = '';
		});

		// $scope.post.comments.push({
		// 	body: $scope.body,
		// 	author: 'user',
		// 	upvotes: 0
		// });

		
	}

	// Increments upvotes for a given comment
 	$scope.incrementUpvotes = function(comment) {
 		posts.upvoteComment(post, comment);
 	};

}]);

/* Notes

The $scope variable serves as the bridge between Angular controllers and 
Angular templates. If you want something to be accessible in the template 
such as a function or variable, bind it to $scope.

*/
