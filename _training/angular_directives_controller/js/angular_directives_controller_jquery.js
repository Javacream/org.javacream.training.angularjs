angular.module("angular_directives_controller", []).controller(
		"SimpleController", function($scope) {
			var input_new_player_name = angular.element(document.getElementById("new_player_name"));
			var input_new_player_instrument = angular.element(document.getElementById("new_player_instrument"));
			$scope.beatle_names = [ 'John', 'Paul', 'George', 'Ringo' ];
			$scope.beatles = {
				lead_guitar : 'Georges',
				drums : 'Ringo',
				bass : 'Paul',
				rythm_guitar : 'John'
			}
			$scope.add_beatle = function() {
				var new_player_name = input_new_player_name.val();
				var new_player_instrument = input_new_player_instrument.val();
				$scope.beatles[new_player_instrument] = new_player_name;
				$scope.beatle_names.push(new_player_name);
			};
		});
