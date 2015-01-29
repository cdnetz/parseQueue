var app = angular.module('parseQ');


app.controller('mainController', function ($scope, parseService) {
	$scope.postData = function (){
		parseService.sendQuestion($scope.message).then(function(){
    		$scope.getParseData();
  		});
	};
	$scope.getParseData = function () {
		parseService.getData().then(function(data){
			$scope.results = data.data;
			console.log($scope.results);
		})

	}
	$scope.changeStatus = function () {
		parseService.updateData().then(function (argument) {
			
		})
	}
	$scope.getParseData();
})