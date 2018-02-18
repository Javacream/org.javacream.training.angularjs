"use strict"
var start = function(){
	var sawitzki = new Person("Sawitzki");
	
	var metzger = new Person("Metzger");
	metzger.say_hello();
	sawitzki.say_hello();

	Person.prototype.say_goodbye = function(){
		console.log(this.lastname + " says goodbye" );
	}
	
	metzger.say_goodbye();
	sawitzki.say_goodbye();
	delete Person.prototype.say_hello;
	
	var message = "Hello";
	console.log(metzger.toString());
	console.log(message.toString());
	console.log(metzger.toXml());
	console.log(message.toXml());
}



