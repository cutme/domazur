(function() {
	'use strict';

	var Helper = function() {
        return {
        	blazy: blazy,
        	goToTarget: goToTarget,
        	isInView: isInView,
        	isMobile: isMobile,
        	nice: nice,
        	showOnScroll: showOnScroll,
        	rwd: rwd
        };
    };
    
	var isInView = function(el) {
		var bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
		
		if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow ) {
			return true;
		}
	};

	var blazy = function() {
		var bLazy = new Blazy({
			success: function(element){
			    setTimeout(function(){					
					var parent = element.parentNode,
						grandpa = element.parentNode.parentNode;

					//classie.remove( parent, 'is-loading');
					//classie.add( parent, 'is-loaded');

					parent.className += ' is-loaded';
					grandpa.className += ' is-loaded';
					//parent.parentNode.className = parent.parentNode.className.replace(/\bis-loading\b/,'');
			    }, 200);
	        }
	   });
	};
	
	var goToTarget = function() {
		
		var btn = document.getElementsByClassName('js-goto'),
		
			action = function action(e) {

				var that = e.currentTarget,
					src = that.getAttribute('href'),
					target = 0,
					window_pos = window.pageYOffset || window.scrollY;
					
				if (src.length > 1) {	
					var obj = document.getElementById( src.slice(1, src.length) );
					
					target = window_pos + obj.getBoundingClientRect().top;
				}

				TweenLite.to(window, 0.5, {
					scrollTo: {
						y: target
					}
				});
			
				e.returnValue = false;	
			};
		
		for (var i = 0; i < btn.length; i++) {
			btn[i].addEventListener('click', action);
		}		
	};
	
	var isMobile = function() {
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
			classie.add( document.getElementsByTagName('html')[0], 'mobile');
		} else {
			classie.add( document.getElementsByTagName('html')[0], 'desktop');
		}
	};
	
	var nice = function(el) {
		$('.nice-select').niceSelect();
	};
	
	var rwd = function() {			

		function detach(node, target) {
			var parent = node.parentNode;
			var next = node.nextSibling;
			if (!parent) { return; }
			
			parent.removeChild(node);	// Detach node from DOM.		
			target.append(node, next);	// Append
		}
		
		function follow() {
			var status = false,
				el = document.getElementsByClassName('js-followNav')[0],
				src = document.getElementsByClassName('js-follow')[0],
				dest = document.getElementsByClassName('js-contact')[0];

			var initFollow = function() {
				var ww = window.innerWidth;

				if (ww <= 1024 && status !== true) {
					var elz = $(el).detach();
						$(dest).append(elz);
					
				//	detach( el, dest );
					status = true;
				}
				
				if (ww > 1024 && status !== false) {
				
					var elza = $(el).detach();
						$(src).append(elza);
						
					//detach( el, src );
					status = false;
				}
			};
			
			initFollow();
			window.addEventListener('resize', initFollow);
		}

		function searchSubmit() {
			var status = false,
				el = document.getElementById('searchSubmit'),
				src = document.getElementsByClassName('c-search__label--submit')[0],
				dest = document.getElementsByClassName('c-search__item--submit')[0];

			var init = function() {
				var ww = window.innerWidth;

				if (ww <= 1410 && status !== true) {
				
					var elz = $(el).detach();
						$(dest).append(elz);
						
					//detach( el, dest );
					status = true;
				}
				
				if (ww > 1410 && status !== false) {
				
					var elza = $(el).detach();
						$(src).append(elza);
				
					//detach( el, src );
					status = false;
				}
			};
			
			init();
			window.addEventListener('resize', init);
		}

		follow();
		searchSubmit();	
	};
	
	var showOnScroll = function() {
		var el = document.getElementsByClassName('anim');
		
		for (var i = 0; i < el.length; i++) {
			if (isInView(el[i])) {
				classie.add( el[i], 'anim--loaded' );
			}
		}
		
		function init() {			
			for (var i = 0; i < el.length; i++) {
				if ( el[i].getAttribute('visible') === null ) {
					var bottomOfObject = el[i].getBoundingClientRect().top + (window.pageYOffset || window.scrollY) + 100,
						bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
					if( bottomOfWindow > bottomOfObject ) {
						classie.add( el[i], 'anim--loaded' );
						el[i].setAttribute('visible', true);
					}
				}
			}
		}
		window.addEventListener('scroll', init);
	};
	
	ctme.Helper = new Helper();
	
	
	isMobile();
	rwd();

	


}(window.ctme = window.ctme || {}));