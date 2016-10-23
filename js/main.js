$(document).ready(function() {
	
	/*** Back to Works ***/
	$(window).scroll(function() {
		if ($(window).scrollTop() <= 100) {
			$('.about-me').removeClass('top');
		}
		else {
			$('.about-me').addClass('top');
		}
	});
	
	slideSwitch();
	
	$('.button-container, .switch-container').bind('touchstart mousedown', function(e){
	});
	
	/*** Logo and menu effects handlers ***/
	logoHandler();
	menuHandler();	
	toggleConnectOverlay();   
});

/*** Helper Functions ***/
				
// Update slide switch highlight
function slideSwitch() {
	$('.switch-slide').on('click', function() {
		
	var activeSpan = $('.switch-toggle-slide .active');

	if (activeSpan.css('left') == '0px') {
		activeSpan.css('left', '50%');
	}
	
	if (activeSpan.css('left') == '125px') {
		activeSpan.css('left', '0');
	}
	
	if ($(this).hasClass('active-switch')) {
		$('.switch-slide').addClass('active-switch')
		$(this).removeClass('active-switch');
	}
	else {
		$('.switch-slide').removeClass('active-switch')
		$(this).addClass('active-switch');
	}
	});
}