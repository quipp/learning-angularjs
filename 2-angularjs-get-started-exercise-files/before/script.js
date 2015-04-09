// Code goes here

var MainController = function($scope) {
	$scope.message = "Hello!";

	var person = {
		firstName: "Jason",
		lastName: "Dudley",
		imageSrc: "https://angularjs.org/img/AngularJS-large.png"
	};

	$scope.person = person;
};