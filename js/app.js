$(document).ready(function(){

/*	function typeWriter(text, n) {
  		if (n < (text.length)) {
    		$('.type-style').html(text.substring(0, n+1));
    		n++;
    		setTimeout(function() {
      			typeWriter(text, n)
    		}, 100);
  		}
	}

	var text = $('.type-style').data('text');
  
  	typeWriter(text, 0);*/

	$('#myCarousel').hover(function(){
   		$("#myCarousel").carousel('pause');
	},function(){
   		$("#myCarousel").carousel('cycle');
	});

	/*$("#menu-down-button1").click(function(){
		$('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 200);
	});*/

	function scrollTo(id){
  		// Scroll
  		$('html,body').animate({scrollTop: $(id).offset().top},1500);
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


    

});
window.onload = function (){
	var dteNow = new Date();
	var intYear = dteNow.getFullYear();
	document.getElementById("copyright").innerHTML ="<p class = 'footer-font'><strong> &copy; Efe Fregene, "+ intYear+"</strong></p>";

	//define text
    var text = 'Welcome to my personal website. I hope you find what you seek';

        //text is split up to letters
    $.each(text.split(''), function(i, letter){

            //we add 100*i ms delay to each letter 
    	setTimeout(function(){

                //we add the letter to the container
       		$('#type-style').html($('#type-style').html() + letter);
            
        }, 100*i);
    });

};