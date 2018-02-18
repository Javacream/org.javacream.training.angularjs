angular.module("angular_directives_controller", []).controller(
		"SimpleController", function($scope) {
			$scope.beatle_names = [ 'John', 'Paul', 'George', 'Ringo' ];
			$scope.beatles = {
				lead_guitar : 'Georges',
				drums : 'Ringo',
				bass : 'Paul',
				rythm_guitar : 'John'
			}
			$scope.add_beatle = function() {
				$scope.beatles[$scope.new_player.instrument] = $scope.new_player.name;
				$scope.beatle_names.push($scope.new_player.name);
			};
		});
