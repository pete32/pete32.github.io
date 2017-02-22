$(document).ready(function() {
	var $grid = $('.grid').imagesLoaded( function() {
		$grid.masonry({
			itemSelector: '.grid-item',
			fitWidth: true,
			gutter: 10,
			//columnWidth: 320
		});
	});


});