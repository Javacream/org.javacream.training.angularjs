angular.module("angular_custom_directive", []).controller("angular_custom_directive_controller", function($scope){
}).directive("jcDirective", function() {
	return {
		restrict: 'A',
		replace: true,
		template: '<a href="{{linkUrl}}">{{linkText}}</a>',
		scope: {
			linkUrl: '@',
			linkText: '@'
		}	
		
	};
	
})
