(function() {
	'use strict';
	
	var Search = ctme.Search = function () { };
	
	Search.prototype.more = function() {
	
		var more = document.getElementById('moreOptions'),
			items = document.getElementsByClassName('js-items')[0],
			searchMore = document.getElementsByClassName('js-more')[0];
	
		var action = function(e) {
			
			classie.add(searchMore, 'is-hidden');
			classie.add(items, 'is-visible');
			
			e.returnValue = false;
		};
		
		var restoreDefault = function() {
			var status = false;
			
			if (status !== true) {
				classie.remove(searchMore, 'is-hidden');
				classie.remove(items, 'is-visible');
				status = true;
			}
			
		};
		
		more.addEventListener('click', action);
		//window.addEventListener('resize', restoreDefault);
	};


	Search.prototype.searchform = function() {
	
		var lens = document.getElementById('searchlens'),
			form = document.getElementById('searchform');
	
		var action = function(e) {

			classie.toggle(lens, 'icon-loop');
			classie.toggle(lens, 'icon-close');

			classie.toggle(form, 'is-visible');
			
			e.returnValue = false;
		};		
		
		lens.addEventListener('click', action);
	};


	Search.prototype.init = function() {
	
		var search = document.getElementById('search');
		
		if (document.body.contains(search)) {
			ctme.Search.more();
		}
		
		ctme.Search.searchform();
	};

	ctme.Search = new Search();	


}(window.ctme = window.ctme || {}));

