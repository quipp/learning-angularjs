// Code goes here

var myApp = angular.module('myApp', []);

myApp.controller("MainController", ["$scope",
	function(s) {
		s.message = "Hello, Angular!";
	}
]);