angular.module("angular_routes", ['ngRoute']).controller("angular_routes_controller", function($scope, $rootScope) {
	var beatles = {
		John : {
			given_name : 'John',
			name : "Lennon"
		},
		Paul : {
			given_name : 'Paul',
			name : "McCartney"
		},
		George : {
			given_name : 'George',
			name : "Harrison"
		},
		Ringo : {
			given_name : 'Ringo',
			name : "Starr"
		}
	};
	
	var the_beatles = {
		lead_guitar : beatles.George,
		drums : beatles.Ringo,
		bass : beatles.Paul,
		rythm_guitar : beatles.John
	}
	$scope.beatles = beatles;
	$scope.the_beatles = the_beatles;
}).controller("BeatlesController", function($scope, $rootScope) {
}).controller("BeatleController", function($scope, $routeParams) {
	var beatle = $scope.beatles[$routeParams.beatle];
	$scope.given_name = beatle.given_name;
	$scope.name = beatle.name;
}).config(function($routeProvider){
	$routeProvider.when("/beatles", {
		templateUrl: "beatles.html", controller:"BeatlesController"
	}).when("/beatles/:beatle", {
		templateUrl: "beatle.html", controller:"BeatleController"
	}).otherwise("/beatles")
});
