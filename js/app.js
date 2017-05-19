$(document).ready(function(){

	//Type writer animation 
	function typeWriter(text, n) {
  		if (n < (text.length)) {
    		$('.type-style').html(text.substring(0, n+1));
    		n++;
    		setTimeout(function() {
      			typeWriter(text, n)
    		}, 100);
  		}
	}

	var text = $('.type-style').data('text');
  
  	typeWriter(text, 0);

	/*$('#myCarousel').hover(function(){
   		$("#myCarousel").carousel('pause');
	},function(){
   		$("#myCarousel").carousel('cycle');
	});*/

	//Function to scroll to certain places on the HTML
	function scrollTo(id){
  		// Scroll
  		$('html,body').animate({scrollTop: $(id).offset().top
  		},1500);
	}
	$('#brand-name').click(function(){
  		scrollTo("#home");
	});
	$('#menu-down-button1').click(function(){
  		scrollTo("#about");
	});
	$('#about-nav').click(function(){
  		scrollTo("#about");
	});
	$('#menu-down-button2').click(function(){
  		scrollTo("#projects");
	});
	$('#projects-nav').click(function(){
  		scrollTo("#projects");
	});
	$('#menu-down-button3').click(function(){
  		scrollTo("#footer");
	});
	$('#contact-nav').click(function(){
  		scrollTo("#footer");
	}); 

	//Owl Carousel
	$("#owl-demo").owlCarousel({
		autoplay: true,
	    loop:true,
		nav: true,
		navSpeed: 300,
		dotsSpeed: 400,
		slideBy: 2,
		margin: 10,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		touchDrag: true,
		singleItem: true,
		responsive:{
	        0:{
	            items:1,
	            slideBy: 1

	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:2
	        }
	    }
	});

	//Bootstrap Nav Bar Hamburger to retract after selecting from Nav Menu
	$(document).on('click', function(event){
      var $clickedOn = $(event.target),
          $collapsableItems = $('.collapse'),
          isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
          isLink = ($clickedOn.closest('a').length == 1),
          isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);

      if( (!isToggleButton && isLink) || isOutsideNavbar ) {
        $collapsableItems.each(function(){
          $(this).collapse('hide');
        });
      }
    });
});

window.onload = function (){
	var dteNow = new Date();
	var intYear = dteNow.getFullYear();
	document.getElementById("copyright").innerHTML ="<p class = 'footer-font'><strong> &copy; Efe Fregene, "+ intYear+"</strong></p>";

/*	//define text
    var text = 'Welcome to my personal website. I hope you find what you seek';

        //text is split up to letters
    $.each(text.split(''), function(i, letter){

            //we add 100*i ms delay to each letter 
    	setTimeout(function(){

                //we add the letter to the container
       		$('#type-style').html($('#type-style').html() + letter);
            
        }, 100*i);
    });*/

};