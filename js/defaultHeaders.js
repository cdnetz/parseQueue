var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
	return{
		request: function (config) {
			config.headers = {'X-Parse-Application-Id': 'z4OoDWQ4vyoICdWMklpJOzVLk5QJRroINOUjR0gd', 'X-Parse-REST-API-Key': 'A8mKX4NwEcbHG35LqCYybdFCpgufGp8e6FVLSC17'}
			return config;
		}
	}
})