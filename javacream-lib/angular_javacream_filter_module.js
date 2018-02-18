angular.module("angular_javacream_filter_module", []).filter('headline', function() {
	var titleCaseFilter = function(input) {
		var words = input.split(' ');
		for (var i = 0; i < words.length; i++) {
			words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
		}
		return words.join(' ');
	};
	return titleCaseFilter;
}).filter('replace', function() {
	return function(input, search, replacement, all) {
		var regexp
		if (all){
			regexp = new RegExp(search, 'g');
		}else{
			regexp = new RegExp(search);
		}
		return input.replace(regexp, replacement);
	};
});

