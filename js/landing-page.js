// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

/*
$('div.popup') {
    var modal = document.getElementById('#portfolioModal1');

    var open = document.getElementById('open-popup1');

    // close button
    var span = document.getElementsByClassName("close")[0];
    // TRY ELEMENTS WITHOUT AN S?

    // when the user clicks on the heading, opens the popup
    open.onclick = function() {
        popup.style.display = "block"
    }

    //when the user clicks on <span> {x} close the popup
    span.onclick = function {
        popup.style.display = "none"; 
    }

    //when the user clicks anywhere oustide of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }


};
*/