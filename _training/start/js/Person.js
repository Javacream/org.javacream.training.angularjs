"use strict"
//Object.freeze(Object.prototype);

var Person = function(lastname){
	this.lastname = lastname;
//	this.say_hello = Person.say_hello;
	Object.freeze(this);
}

Person.prototype.say_hello = function(){
	console.log(this.lastname);
};
Object.prototype.toXml = function(){
	for (var attr in this){
		console.log(this[attr]);
	}
	return "<....";
};
Person.prototype.toString = function(){
	return "toString: " + this.lastname;
};

//Object.freeze(Person.prototype)
