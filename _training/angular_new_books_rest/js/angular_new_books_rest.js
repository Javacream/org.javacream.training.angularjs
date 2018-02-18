angular.module("angular_new_books_rest", ["custom_validators"]).controller(
		"angular_new_books_rest_controller",
		function($http, $log, $scope) {
			$scope.add = function(book) {
				$http.post("http://localhost:8080/jaxrs/rest/books", book)
						.success(function(data) {
							$log.info("Posting book done: " + data);
						}).error(function(err) {
							$log.error("Posting book done: " + err);
						});
			}
		});
