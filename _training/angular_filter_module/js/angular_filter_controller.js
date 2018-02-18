angular.module("angular_filter_controller", ["angular_javacream_filter_module"]).controller("Controller", function($scope) {
	$scope.number = 42.01;
	$scope.message = "Hello world from controller!";
});
