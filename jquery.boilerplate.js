// remember to change every instance of "plugin/Plugin" to the name of your plugin!
// the semicolon at the beginning is there on purpose in order to protect the integrity of your scripts when
// mixed with incomplete objects, arrays, etc.
;(function($) {

	// Create the defaults, only once!
	var defaults = {
		propertyName: "value"
	};

	// The actual plugin constructor
	function Plugin( element, options ) {
		this.element = element;
		this.options = $.extend( {}, defaults, this.options );
		this.init();
	}

	Plugin.prototype.init = function() {
		// Place initialization logic here
		// You already have access to the DOM element and the options via the instance, 
		// e.g., this.element and this.options
	};

	// A really lightweight plugin wrapper around the constructor, 
	// preventing against multiple instantiations
	$.fn.plugin = function( options ) {
		return this.each(function() {
			if ( !$.data( this, "plugin" ) ) {
				$.data( this, "plugin", new Plugin( this, options ) );
			}
		});
	}

})(jQuery);
