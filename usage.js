$(document).ready(function() {

	var elem = $("#someElement");

	// Intialization
	element.pluginName({
		"propertyName" : "somethingElse"
	});

	// Getting the instance
	var inst = elem.data( "plugin" );

	// Using the instance
	inst.somePublicMethod();

	console.log( inst.somePublicProperty );

});
