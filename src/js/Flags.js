(function() {
	'use strict';
	
	var Flags = ctme.Flags = function () { };
		
		
	Flags.prototype.init = function(ev) {
		var toggleFlags = document.getElementById('currentFlag'),
			flags = document.getElementById('flags'),
			action = function(ev) {
				classie.toggle( flags, 'is-visible' );
				ev.returnValue = false;	
			};
			

		toggleFlags.addEventListener('click', action);
	};

	ctme.Flags = new Flags();	


}(window.ctme = window.ctme || {}));

