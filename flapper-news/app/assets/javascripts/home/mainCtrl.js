angular.module('flapperNews')
.controller('MainCtrl', [
'$scope',
'posts', // inject the posts factory (service)
function($scope, posts) {
	// A test variable that will be available to the MainCtrl
	// in the HTML side ;) => refer to it using {{test}}
	$scope.test = "What is up?!";

	// An array of post objects
	// $scope.posts = [
	// 	{ title: 'post 1', upvotes: 5},
	//   { title: 'post 2', upvotes: 2},
	//   { title: 'post 3', upvotes: 15},
	//   { title: 'post 4', upvotes: 9},
	//   { title: 'post 5', upvotes: 4},
 // 	];

 	// Bind the $scope.posts variable in our controller to the posts array in our service
 	$scope.posts = posts.posts;
 	// any change or modification made to $scope.posts will be stored in the service 
 	// and immediately accessible by any other module that injects the posts service.

 	// Adds a post to the array of posts
 	$scope.addPost = function() {
 		// prevent user from submitting a post with a blank title
 		// checks if $scope.title is undefined or it is just blank
 		if (!$scope.title || $scope.title === '') { return; }

 		$scope.posts.push({ 
 			title: $scope.title, 
 			link: $scope.link,
 			upvotes: 0,
 			comments: [
 				{ author: 'Joe', body: 'Cool post!', upvotes: 0 },
 				{ author: 'Bob', body: 'Sounds good, but everything is wrong!', upvotes: 0 },
 			]
 		});

 		// clean up the form input
 		$scope.title = '';
 		$scope.link = '';
 	};

 	// Increments upvotes for a given post
 	$scope.incrementUpvotes = function(post) {
 		/*
			we are passing the current instance of post to the function. 
			This is happening by reference so when we increment upvotes, 
			it gets automatically reflected back to the HTML page.
 		*/
 		post.upvotes++;
 	};
}]);
