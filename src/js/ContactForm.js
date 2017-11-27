(function() {
	'use strict';
	
	var Form = ctme.Form = function () { },
		form = document.getElementById('contactForm');
	
	Form.prototype.init = function() {
		if (document.body.contains(form)) {
			this.enable();
		}
	};

	Form.prototype.ajax = function() {
		var spinner = document.querySelector('.js-spinner'),
			submit = document.getElementById('submit');

		classie.add( submit, 'is-hidden' );
		classie.remove( spinner, 'is-hidden' );

		var $form = $(document.getElementById('contactForm')),
			formAction = $form.attr('action'),
			formType = $form.attr('method'),
			fields = document.querySelector('.c-contactform__fields'),
			thanks = document.querySelector('.c-contactform__thanks');

		$.ajax({
			cache: false,
			url: formAction,
			type: formType,
			data: $form.serialize(),
			success: function(data, statusText, jqXHR) {

				if (data == 'ok') {

					classie.remove( thanks, 'is-hidden' );
					classie.add( fields, 'is-hidden' );

					var target = $(form).offset().top,
						$viewport = $('body, html'),
						page_offset = $(document).scrollTop(),
						offset_diff = Math.abs(target - page_offset),
						base_speed  = 500,
						speed       = (offset_diff * base_speed) / 1000,
						ww = window.innerWidth,
						offset;
						
					if (ww > 640) {
						offset = 56;
					} else {
						ofset = 70;
					}
			
					$(document).scrollTop(page_offset);

					$viewport.animate({
						scrollTop: target - offset
					}, {
						duration: 500
					});

				}
			}, error: function(result) {
			
				setTimeout(function() {
				
					classie.remove( submit, 'is-hidden' );
					classie.add( spinner, 'is-hidden' );

				}, 1000);
				
				alert('error: ' + result.status + ' ' + result.statusText);
			}
		});
	};

	Form.prototype.enable = function() {
		var form = document.getElementById('contactForm'),
			options = {
			trigger:		'change',
			successClass:	'has-success',
			errorClass:		'has-error',
			classHandler:	function (el) {
				return el.$element.closest('.c-form__wrap');
			}
		};
		
  
		$(form).parsley(options).on('form:success', function (formInstance) {
		
			Form.prototype.ajax();
			
		});

		form.reset();
		
		window.Parsley.on('form:submit', function() {
			return false;
		});

		(function() {
			// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
			if (!String.prototype.trim) {
				(function() {
					// Make sure we trim BOM and NBSP
					var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
					String.prototype.trim = function() {
						return this.replace(rtrim, '');
					};
				})();
			}

			[].slice.call( document.querySelectorAll( '.input__field' ) ).forEach( function( inputEl ) {
				// in case the input is already filled..
				if( inputEl.value.trim() !== '' ) {
					classie.add( inputEl.parentNode, 'input--filled' );
				}

				// events:
				inputEl.addEventListener( 'focus', onInputFocus );
				inputEl.addEventListener( 'blur', onInputBlur );
			} );

			function onInputFocus( ev ) {
				classie.add( ev.target.parentNode, 'input--filled' );
			}

			function onInputBlur( ev ) {
				if( ev.target.value.trim() === '' ) {
					classie.remove( ev.target.parentNode, 'input--filled' );
				}
			}
		})();
	};
	
	ctme.Form = new Form();	


}(window.ctme = window.ctme || {}));

