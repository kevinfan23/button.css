function logoHandler() {
	initLogo();
	updateLogo();
}

function menuHandler() {
	initMenu();
	toggleMenuOverlay();
}


function initLogo() {
	
	/*** Initialize logo color ***/
	if ($('.block-logo').hasClass('dark')) {
		$('.block-logo span.logo').addClass('dark');
	}
	else {
		$('.block-logo span.logo').addClass('light');
	}
}

function updateLogo() {

	/*** Update the logo color when CONNECT is clicked ***/
	$('.connect').on('click', function() {
		if (!$('.menu-container').hasClass('fadeInScale')) {

			if (!$('.connect-overlay').hasClass('connected-overlay')) {
				$('.block-logo span.logo').removeClass('dark');
				$('.block-logo span.logo').addClass('light');
			}	
			else {
				if ($('.block-logo').hasClass('dark')) {
					$('.block-logo span.logo').removeClass('light');
					$('.block-logo span.logo').addClass('dark');
				}
				else {
					$('.block-logo span.logo').removeClass('dark');
					$('.block-logo span.logo').addClass('light');
				}
			}
		}
		
		$('.connect-overlay').on('click', function() {
			if (!$('.menu-container').hasClass('fadeInScale')) {
					
				if ($('.block-logo').hasClass('dark')) {
					$('.block-logo span.logo').removeClass('light');
					$('.block-logo span.logo').addClass('dark');
				}
				else {
					$('.block-logo span.logo').removeClass('dark');
					$('.block-logo span.logo').addClass('light');
				}
			}
		});
	});
}

function initMenu() {
	
	/*** Initialize the logo menu color when CONNECT is clicked ***/
	$('.menu-icon').on('click', function() {
		if (!$('.menu-container').hasClass('fadeInScale')) {
			$('.block-logo span.logo').removeClass('dark');
			$('.block-logo span.logo').addClass('light');
			$('.page-container').removeClass('fixed-page');
		}	
		else {
			if ($('.block-logo').hasClass('dark')) {
				$('.block-logo span.logo').removeClass('light');
				$('.block-logo span.logo').addClass('dark');
			}
			else {
				$('.block-logo span.logo').removeClass('dark');
				$('.block-logo span.logo').addClass('light');
			}
			$('.page-container').addClass('fixed-page');
		}
	});
}

function toggleConnectOverlay() {
	
	/*** Connect page effects ***/
	
	$('.connect').on('click', function(){
		if ($('.connect-overlay').hasClass('connected-overlay')) {
			$('.connect').removeClass('connected');				
			$('.connect-overlay').removeClass('connected-overlay');
			$('.connect-container').removeClass('connected-container');
			$('li.connect-item').removeClass('fadeInDownSwing');
			$('.page-container').removeClass('fixed-page');
			
			if ($('.connect').hasClass('dark')) {
				$('.connect').removeClass('light');
				$('.connect').addClass('dark');
			}
			else {
				$('.connect').removeClass('dark');
				$('.connect').addClass('light');
			}
			
			if ($('.menu-container').hasClass('fadeInScale')) {
				$('.page-container').addClass('fixed-page');
			}
		}
		else {
			$('.connect-overlay').height($(window).height());
			$('.connect-overlay').addClass('connected-overlay');
			$('.connect-container').addClass('connected-container');
			$('li.connect-item').addClass('fadeInDownSwing');
			$('.page-container').addClass('fixed-page');
		}
		
		
		$('.connect-overlay').on('click', function() {
			$('.connect-overlay').removeClass('connected-overlay');
			$('.connect-container').removeClass('connected-container')
			$('li.connect-item').removeClass('fadeInDownSwing');
			$('.connect-container').removeClass('fixed-page');
			$('.connect').removeClass('connected');
			if ($('.menu-container').hasClass('fadeInScale')) {
				$('.page-container').addClass('fixed-page');
			}
			else {
				$('.page-container').removeClass('fixed-page');
			}
		});
	});
}

function toggleMenuOverlay() {
	$('.menu-icon').on('click', function() {
	    var span = $('#menu-span');
	    if (span.text() === "close.") {
		    span.text('menu.');
	    } else {
			$('#menu-span').text('close.');
		}
		$('.page-container').toggleClass('fixed-page');
		$('.menu-container').toggleClass('fadeInScale');
		$('.connect-overlay').removeClass('connected-overlay');
		$('.connect-container').removeClass('connected-container');
		$('li.connect-item').removeClass('fadeInDownSwing');
		$('.connect').removeClass('connected');
	});	
}

