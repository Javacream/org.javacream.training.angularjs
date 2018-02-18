var angular_books_rest_module = angular.module("angular_books_rest", []);
//angular_books_rest_module.config(function($httpProvider) {
//    //Enable cross domain calls
//    $httpProvider.defaults.useXDomain = true;
//});
//);
angular_books_rest_module.controller("books_controller", function($scope, $log,
		$http) {
	$http.get("http://localhost:8080/jaxrs/rest/books").success(
			function(books) {
				$scope.books = books;
			}).error(function(err) {
		$log.error(err);
	});
	
	$scope.add = function() {
		var book = $scope.book;
		$scope.books.push(book);
		$http.post("http://localhost:8080/jaxrs/rest/books", book).success(
				function(data) {
					$log.info("Posting book done: " + data);
				}).error(function(err) {
			$log.error("Posting book done: " + err);
		});
		delete $scope.book
	};
	$scope.remove = function(index) {
		$scope.books.splice(index, 1);
		$log.info($scope.books)
	};
});

angular_books_rest_module.controller("books_view_controller", function($scope) {
	$scope.add_button = "Add book";
});
