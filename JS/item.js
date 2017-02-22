$(document).ready(function() {
    $('#fullpage').fullpage({
    	slidesNavigation: true,
    	slidesNavPosition: 'bottom',
    	autoScrolling: false,
		fitToSection: false,
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
			if (slideIndex == 0) {
				// Pause Youtube video
                // TODO: check to see if there's an iFrame first
				var iframe = document.getElementById("video");
				if (iframe != null) iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}','*');
			}
		},
    });
});