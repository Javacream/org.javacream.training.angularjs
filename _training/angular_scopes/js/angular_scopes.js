angular.module("angular_scopes", []).controller("OuterController",
		function($scope, $rootScope) {
			$rootScope.message = "A message from root scope";
			$scope.message = "A message from outer controller";
			
			$scope.$on("scope-event", function(event, data) {
				$scope.message = data.description;
			});

		}).controller("InnerController", function($scope) {
	$scope.message = "A message from inner controller";
	$scope.action = function() {
		$scope.$emit("scope-event", {
			description : "greeting from inner controller"
		});
	};
}).controller("MiddleController", function($scope) {
	$scope.$on("scope-event", function(event, data) {
		$scope.message = data.description;
	});

});
