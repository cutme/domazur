(function() {
	'use strict';
	
	var Carousel = ctme.Carousel = function () { },
		buy = document.getElementById('buy');

	Carousel.prototype.buySwiper = function() {	
		var mySwiper = new Swiper (buy, {
			autoplay: false,
			slidesPerView: 4,
			slidesPerGroup: 4,
			freeMode: true,
			speed: 400,
			spaceBetween: 47,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			
			
			breakpoints: {
				// when window width is <= 1439px
				1439: {
					slidesPerView: 3,
					spaceBetween: 20
				}
			}
		});	
		
	};
	
	
	Carousel.prototype.gallery = function() {

		var galleryTop = new Swiper('.gallery-top', {
			spaceBetween: 10,
			navigation: {
				nextEl: '.swiper-button--next',
				prevEl: '.swiper-button--prev',
			}
		});
		
		var galleryThumbs = new Swiper('.gallery-thumbs', {
			centeredSlides: true,
			slidesPerView: 'auto',
			touchRatio: 0.2,
			slideToClickedSlide: true,
		});

		galleryTop.controller.control = galleryThumbs;
		galleryThumbs.controller.control = galleryTop;	
	};
	
	
	
	Carousel.prototype.init = function() {
	
		var thumbsGallery = document.getElementById('thumbsGallery');
	
		if (buy) {
			ctme.Carousel.buySwiper();
		}
		
		
		if (document.body.contains(thumbsGallery)) {
			ctme.Carousel.gallery();
		}

		/*
var action = function() {

			var result = ctme.Helper.isInView(buy);
		
			if (result) {
				ctme.Carousel.opinions();
				window.removeEventListener('scroll', action);
			}			
		};

		window.addEventListener('scroll', action);
*/
	};

	ctme.Carousel = new Carousel();	


}(window.ctme = window.ctme || {}));

