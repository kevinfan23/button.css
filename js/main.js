/*** Variable ***/
var contentSections = $('.image-container'),
	navigationItems = $('.sidenav-item a');

$(document).ready(function() {
	
	slideSwitch();
	
	$('.button-container, .switch-container').bind('touchstart mousedown', function(e){
	});
	
	/*** kfan.io Animation ***/
	
	$('.collapse').addClass('uncollapsed');
		$('#dot').addClass('unshifted');
	
		$(window).scroll(function() {
			if ($(window).scrollTop() <= 10) {
				$('.collapse').removeClass('collapsed');
				$('.collapse').addClass('uncollapsed');
				$('#dot').removeClass('shifted');
				$('#dot').addClass('unshifted');
				$('.kfan-logo .logo').css('color', '#fff');		
			}
			else {
				$('.collapse').removeClass('uncollapsed');
				$('.collapse').addClass('collapsed');
				$('#dot').removeClass('unshifted');
				$('#dot').addClass('shifted');	
				$('.kfan-logo .logo').css('color', '#000');		
			}
		});
		
	/*** Connect page effects ***/
	$('#connect').on('click', function() {
		$('.connect-overlay').height($(window).height());
		$('.connect-overlay').toggleClass('connected-overlay');
		$('.connect-container').toggleClass('connected-container');
		$('li.connect-item').toggleClass('fadeInDownSwing');
		$('.connect-container').toggleClass('fixed-page');
		$('#connect').toggleClass('connected');
		$('.connect-overlay').on('click', function() {
			$('.connect-overlay').removeClass('connected-overlay');
			$('.connect-container').removeClass('connected-container')
			$('li.connect-item').removeClass('fadeInDownSwing');
			$('.connect-container').removeClass('fixed-page');
			$('#connect').removeClass('connected');
		});
	});
	
	/*** Side Navbar Animations ***/
	updateNavigation();
	
	$(window).on('scroll', function(){
		updateNavigation();
	    if (isElementInViewport($('#section1'))) {
		    $('.sidenavbar-container').removeClass('is-appeared');
	    }
	    else {
		    $('.sidenavbar-container').addClass('is-appeared');
	    }
	});	

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });	
    
    $('.menu-icon').on('click', function() {
	    var span = $('#menu-span');
	    if (span.text() === "close.") {
		    console.log('haha');
		    span.text('menu.');
	    } else {
			$('#menu-span').text('close.');
		}
		$('body').toggleClass('fixed-page');
		$('.menu-container').toggleClass('fadeInScale');
		$('.connect-overlay').removeClass('connected-overlay');
		$('.connect-container').removeClass('connected-container');
		$('li.connect-item').removeClass('fadeInDownSwing');
		$('.connect-container').removeClass('fixed-page');
		$('#connect').removeClass('connected');
	});	
   
});

/*** Helper Functions ***/
				
// Update navigation dots and labels
function updateNavigation() {
	contentSections.each(function(){
		$this = $(this);
		var activeSection = $('.sidenav-item a[href="#'+$this.attr('id')+'"]').data('number') - 1 ;
		if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
			navigationItems.eq(activeSection).addClass('is-selected');
		}else {
			navigationItems.eq(activeSection).removeClass('is-selected');
		}
	});
}

// Smooth scroll actions
function smoothScroll(target) {
    $('body,html').animate(
    	{'scrollTop':target.offset().top},
    	400
    );
}

// Check if element is in the viewport
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

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