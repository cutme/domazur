(function() {
	'use strict';
	
	var Nav = ctme.Nav = function () { };

	
	Nav.prototype.fixEl = function() {	
		
		var body = document.getElementsByTagName('body')[0],
			container = document.getElementsByClassName('js-container')[0],
			el = document.getElementById('menu1'),
			elDefPos = el.getBoundingClientRect().top,
			status = false,
			animThis;

		var fixElInit = function() {	
		
			var windowWidth = window.innerWidth;

			if (windowWidth > 768) {
				
				var windowScrollPosition = window.pageYOffset || window.scrollY;
				
				if (windowScrollPosition >= elDefPos + 70) {
					if (status !== true) {
						classie.add(body, 'u-navfixed');
						classie.add(el, 'is-fixed');
						
						animThis = setTimeout(function() {
							classie.add(el, 'is-animed');
						}, 200);
						
						status = true;
					}
				}
			
				if (windowScrollPosition < elDefPos) {
					if (status !== false) {
					
						clearTimeout(animThis);
						
						classie.remove(body, 'u-navfixed');
						classie.remove(el, 'is-fixed');
						classie.remove(el, 'is-animed');
						status = false;
					}
				}
			}
		};
		
		var removeFixElInit = function() {
			var windowWidth = window.innerWidth,
				status = false;
			
			if (windowWidth <= 768) {
				if (status !== true) {
					classie.remove(body, 'u-navfixed');
					classie.remove(el, 'is-fixed');
					classie.remove(el, 'is-animed');
					status = true;
				}
			}
		};
		
		
		
		//setTimeout(function() {
		
			window.scroll(0, 0);  // reset the scroll position to the top left of the document.

			fixElInit();
			removeFixElInit();
			
		//}, 5000);

		window.addEventListener('scroll', fixElInit);
		window.addEventListener('resize', removeFixElInit);
	};

	Nav.prototype.triggers = function() {
	
		var menu1Btn = document.getElementsByClassName('js-menu1')[0],
			menu2Btn = document.getElementsByClassName('js-menu2')[0],
			menu1 = document.getElementById('menu1'),
			menu2 = document.getElementById('menu2');
			
		var showMenu1 = function action(e) {

			classie.toggle(menu1, 'is-visible');
			classie.toggle(menu1Btn, 'icon-hamburger');
			classie.toggle(menu1Btn, 'icon-close');

			classie.add(menu2Btn, 'icon-hamburger--mini');
			classie.remove(menu2Btn, 'icon-line');
			classie.remove(menu2, 'is-visible');

			e.returnValue = false;	
		};
		
		var showMenu2 = function action(e) {

			classie.toggle(menu2, 'is-visible');
			classie.toggle(menu2Btn, 'icon-hamburger--mini');
			classie.toggle(menu2Btn, 'icon-line');
			
			classie.add(menu1Btn, 'icon-hamburger');
			classie.remove(menu1Btn, 'icon-close');
			classie.remove(menu1, 'is-visible');
		
			e.returnValue = false;	
		};
		
		menu1Btn.addEventListener('click', showMenu1);
		menu2Btn.addEventListener('click', showMenu2);
	};
	
	Nav.prototype.init = function() {	

		//if (document.body.contains(partners)) {
			ctme.Nav.fixEl();
			ctme.Nav.triggers();
		//}
	};

	ctme.Nav = new Nav();	


}(window.ctme = window.ctme || {}));

