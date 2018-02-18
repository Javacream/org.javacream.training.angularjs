var angular_dependency_injection_module = angular.module(
		"angular_dependency_injection", []);
angular_dependency_injection_module.controller("simple_controller", function(
		$scope, $location) {
	console.log("no dependency declaration");
	console.log("Scope: " + $scope);
	console.log("Location: " + $location);
	console.log("----------------------");

});
angular_dependency_injection_module.controller("simple_controller_2", [
                                                               		"$scope", "$location", function(foo, goo) {
                                                               			console.log("array notation with dependency declaration");
                                                               			console.log("Scope: " + foo);
                                                               			console.log("Location: " + goo);
                                                               			console.log("----------------------");

                                                               		} ]);
