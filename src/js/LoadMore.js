(function() {
	'use strict';

	var loadMore = ctme.loadMore = function () { },
		btn = document.getElementById('loadMore'),
		prefix;
		
	
	loadMore.prototype.start = function() {
		var grid = document.getElementById('grid'),
			i = 1,
			url = prefix+'-' + i + '.html';

		$(btn).on('click', function(e) {
			e.preventDefault();			


			$.ajax({
				cache: false,
				url: url,
				success: function(msg) {	

					if (msg.length === false) {						
						
						all_loaded = true;

					} else {
						var items = $.parseHTML(msg);
						$(grid).append(items);
						bLazy.revalidate();												
					}
				},
				
				error: function(ob, errStr) {
					console.log(errStr);
				}
			});
			
			
			i ++;
			
			url = prefix+'-' + i + '.html';
			
			$.ajax({
			    url: url,
			    type: 'HEAD',
			    error: function()
			    {
			        $(btn).fadeOut();
			    },
			    success: function() { }
			});		
		});
	};


	loadMore.prototype.init = function() {
	
		if (document.body.contains(btn)) {
			prefix = btn.getAttribute('data-prefix');
			ctme.loadMore.start();
		}
		
	};

	
	ctme.loadMore = new loadMore();

}(window.ctme = window.ctme || {}));
