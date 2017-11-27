(function() {
	'use strict';
	
	$(document).ready(function() {
	
		$('.mfp-image').magnificPopup({
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'my-mfp-zoom-in',
			gallery: {
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow icon-arrow--%dir%"></button>',
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			}
		});
	
	});

	


}(window.ctme = window.ctme || {}));
