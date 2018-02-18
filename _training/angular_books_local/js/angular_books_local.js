var angular_books_local_module = angular.module("angular_books_local", []);

angular_books_local_module.factory("isbn_generator_service", function($log) {
	var counter = 0;
	var _create_isbn = function() {
		var isbn = "ISBN:" + counter++;
		$log.log("created isbn: " + isbn);
		return isbn;

	};
	var _reset = function() {
		counter = 0;
		$log.log("resetted counter");
	};
	return {
		create_isbn : _create_isbn,
		reset : _reset
	};
}

);
angular_books_local_module.controller("books_controller", function($scope,
		$log, $window, isbn_generator_service) {
	// var isbn_generator =
	// var my_isbn_generator = isbn_generator();
	//	
	$scope.books = [];
	$scope.books.push({
		isbn : isbn_generator_service.create_isbn(),
		title : "TITLE1"
	});
	$scope.books.push({
		isbn : isbn_generator_service.create_isbn(),
		title : "TITLE42"
	});
	$scope.books.push({
		isbn : isbn_generator_service.create_isbn(),
		title : "TITLE4"
	});
	$scope.add = function() {
		var book = $scope.book;
		book.isbn = isbn_generator_service.create_isbn();
		$scope.books.push(book);
		$log.info($scope.books)
		delete $scope.book
	};
	$scope.remove = function(index) {
		$scope.books.splice(index, 1);
		$log.info($scope.books)
	};
});

angular_books_local_module.controller("books_view_controller",
		function($scope) {
			$scope.add_button = "Add book";
		});

angular_books_local_module.controller("books_clock_controller", function(
		$scope, $interval) {
	$interval(function() {
		$scope.time = new Date();
	}, 999);
});