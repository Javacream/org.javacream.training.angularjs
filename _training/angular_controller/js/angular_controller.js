var angular_controller_module = angular.module("angular_controller", []);
//var controller_definition = [];
//var controller_function = function(ugo) {
//	ugo.action = function() {
//		console.log("in action");
//	}
//	console.log("in controller");
//};
//controller_definition.push("$scope");
//controller_definition.push(controller_function);
//

angular_controller_module.controller("simple_controller", function($scope) {
	
	var counter = 0;
	
//	$scope.user = {
//			name: "Change me"
//	}
	$scope.action = function() {
		counter++;
		console.log("in action, " + counter + ", user=" + $scope.user.name);
		console.log($scope.dies.und.das);
	}
	$scope.message = "Hello!";
	console.log("in controller");
});


