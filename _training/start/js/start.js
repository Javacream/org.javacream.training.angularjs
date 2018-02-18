"use strict"
var start = function() {
	var result = top_level("Hello");
	var result2 = top_level("World");
	result();
	result2();
	result();
}

var top_level = function(message) {
	//Closure-Variable
	//var message = "Hello";
	console.log("in outer_level, message = " + message);
	var inner_level = function(){
		console.log("in inner_level, message = " + message);
	};
	
	inner_level();
	return inner_level;
};


//Fast vollständige Umsetzung des JavaScript-Patterns "Module"
var Person = function(pName, pWeight){
	var name = pName;
	var weight = pWeight;
	
	
	var result =  {
		getName: function(){
			return name;
		},
		setName: function(new_name){
			name = new_name;
		}
	}
	Object.freeze(result);
	return result;
}

var p1 = Person("Metzger");
var p2 = Person("Meier");

console.log(p1.getName());
console.log(p2.getName());
console.log(p1.getName());
