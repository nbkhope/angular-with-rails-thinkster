angular.module('flapperNews')
.factory('posts', ['$http', function($http) {
	// service body

	// Make the factory object
	var o = {
		// by exporting an object that contains the posts array we can 
		// add new objects and methods to our services in the future.
		posts: []
	};

	o.getAll = function() {
		return $http.get('/posts.json').success(function(data) {
			angular.copy(data, o.posts);
		});
	};

	o.create = function(post) {
		return $http.post('/posts.json', post).success(function(data) {
			o.posts.push(data);
		});
	};

	// Return the factory object
	return o;
}]);

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