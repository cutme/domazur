(function() {
	'use strict';
	
	var Carousel = ctme.Carousel = function () { },
		buy = document.getElementById('buy'),
		partners = document.getElementById('partners');


	Carousel.prototype.buySwiper = function() {	
		var mySwiper = new Swiper (buy, {
			autoplay: true,
			autoplay: {
				delay: 2500,
			},
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 47,
			speed: 400,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			
			
			breakpoints: {
				// when window width is <= 640px
				640: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 0
				},
				// when window width is <= 1023px
				1023: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: 20
				},
				// when window width is <= 1439px
				1439: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					spaceBetween: 20
				}
			},
			
			on: {
				resize: function() {
					setTimeout(function() {
						mySwiper.update();
					}, 100);
				}
			}
		});
		
		var onMouseOver = function() {
			mySwiper.autoplay.stop();
		};
		
		var onMouseOut = function() {
			mySwiper.autoplay.start();
		};
		
		buy.addEventListener('mouseover', onMouseOver);
		buy.addEventListener('mouseout', onMouseOut);

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
	
	
	Carousel.prototype.partnersSwiper = function() {
		
		function ObjectLength( object ) {
		    var length = 0;
		    for( var key in object ) {
		        if( object.hasOwnProperty(key) ) {
		            ++length;
		        }
		    }
		    return length;
		}
		
		var bullets,
			pagination = partners.getElementsByClassName('swiper-pagination')[0];
		
		var mySwiper = new Swiper (partners, {
			autoplay: true,
			slidesPerView: 5,
			slidesPerGroup: 5,
			speed: 400,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},			
			breakpoints: {
				// when window width is <= 640px
				640: {
					slidesPerView: 2
				},
				// when window width is <= 1023px
				767: {
					slidesPerView: 3
				},
				// when window width is <= 1023px
				1023: {
					slidesPerView: 4
				}
			},

			on: {
				init: function() {	
					
					setTimeout(function() {
						bullets = pagination.getElementsByClassName('swiper-pagination-bullet');
							
						if ( ObjectLength(bullets) <= 1 ) {
							pagination.style.display = 'none';
						}
					}, 10);									
				},
				
				resize: function() {

					setTimeout(function() {
						mySwiper.update();
						
						bullets = pagination.getElementsByClassName('swiper-pagination-bullet');
						
						if ( ObjectLength(bullets) > 1 ) {
							pagination.style.display = 'block';
						} else {
							pagination.style.display = 'none';
						}
					}, 10);								
				}
			}
		});	
	};

	
	Carousel.prototype.init = function() {
	
		var thumbsGallery = document.getElementById('thumbsGallery');
			
	
		if (buy) {
			ctme.Carousel.buySwiper();
		}
		
		if (document.body.contains(partners)) {
			ctme.Carousel.partnersSwiper();
		}
		
		if (document.body.contains(thumbsGallery)) {
			ctme.Carousel.gallery();
		}
	};

	ctme.Carousel = new Carousel();	


}(window.ctme = window.ctme || {}));

