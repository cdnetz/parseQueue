var app = angular.module('parseQ');

app.service('parseService', function ($http) {
	this.sendQuestion = function(message){
		return $http ({
			method: "POST",
			url: "https://api.parse.com/1/classes/message",
			data: {text: message},
			status: "red"
		})
	}

	this.getData = function (){
		return $http ({
			method: "GET",
			url: "https://api.parse.com/1/classes/message"
		})
	}
	this.updateData= function (){
		return $http ({
			method: "PUT",
			url: "https://api.parse.com/1/classes/message/objectId"
		})
	}

})