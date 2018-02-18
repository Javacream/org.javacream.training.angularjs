angular.module("angular_service", []).value("isbnGenerator", {
	create_isbn : function() {
		return 42;
	}
}).factory('isbnGeneratorFactory', function($log) {
	var counter = 0;
	return {
		create_isbn : function() {
			var isbn = "ISBN:" + counter++;
			$log.log("factory created isbn: " + isbn);
			return isbn;
		}
	};
}).provider('isbnGeneratorProvider', function isbnGeneratorProvider(){
	var counter;
	this.setCounter = function(start){
		counter = start;
	};
	this.$get = function($log){
		return {create_isbn: function(){
			var isbn = "ISBN:" + counter++;
			$log.log("provider created isbn: " + isbn);
			return isbn;
		}};
	}
}).config(function(isbnGeneratorProviderProvider){
	isbnGeneratorProviderProvider.setCounter(41);
}).controller(
		"isbnGeneratorController",
		function(isbnGenerator, isbnGeneratorFactory, isbnGeneratorService,
				isbnGeneratorProvider, $scope) {
			$scope.action = function() {
				$scope.valueIsbn = isbnGenerator.create_isbn();
				$scope.factoryIsbn = isbnGeneratorFactory.create_isbn();
				$scope.serviceIsbn = isbnGeneratorService.create_isbn();
				$scope.providerIsbn = isbnGeneratorProvider.create_isbn();
			}
		}).service('isbnGeneratorService', function($log) {
	this.counter = 0;
	this.create_isbn = function() {
		var isbn = "ISBN:" + this.counter++;
		$log.log("service created isbn: " + isbn);
		return isbn;

	};
	this.reset = function() {
		this.counter = 0;
		$log.log("resetted counter");
	}
});