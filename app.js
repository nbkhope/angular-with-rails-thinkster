angular.module('flapperNews', [])
.factory('posts', [function() {
	// service body

	// Make the factory object
	var o = {
		// by exporting an object that contains the posts array we can 
		// add new objects and methods to our services in the future.
		posts: []
	};

	// Return the factory object
	return o;
}])

/* Notes

By Angular conventions, lowerCamelCase is used for factory names that won't be new'ed.

You may be wondering why we're using the keyword factory instead of service. 
In angular, factory and service are related in that they are both instances of 
a third entity called provider.

http://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/

1) When you’re using a Factory you create an object, add properties to it, 
then return that same object. When you pass this service into your controller, 
those properties on the object will now be available in that controller through 
your factory.

2) When you’re using Service, it’s instantiated with the ‘new’ keyword. 
Because of that, you’ll add properties to ‘this’ and the service will return 
‘this’. When you pass the service into your controller, those properties on 
‘this’ will now be available on that controller through your service.

3) Providers are the only service you can pass into your .config() function. 
Use a provider when you want to provide module-wide configuration for your 
service object before making it available.



*/

//angular.module('flapperNews', [])
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
 			upvotes: 0 
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

/* Notes

The $scope variable serves as the bridge between Angular controllers and 
Angular templates. If you want something to be accessible in the template 
such as a function or variable, bind it to $scope.

*/
