(function($){
	$(document).ready(function(){
	
		$(".banner-image").backstretch('images/banner.jpg');
		
		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});
		
	   $('#quote-carousel').carousel({
		 pause: true,
		 interval: 4000,
	   });
		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-151
						}, 1000);
						return false;
					}
				}
			});
		}

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

	}); // End document ready
})(this.jQuery);


// Video
//-----------------------------------------------
var video = document.getElementById('video_engage');
var play = $('.play');
var pause = $('.pause');
play.bind('click', function(e) {
	video.play();
  play.hide();
  pause.show();

});

pause.bind('click', function(e) {
	video.pause();
  pause.hide();
  play.show();

});




document.getElementById('video_engage').addEventListener('ended',myHandler,false);
function myHandler(e) {
	pause.hide();
	play.show();
	// What you want to do after the event
}


document.getElementById('video_engage').addEventListener("playing", () => {
	console.log("yess!");
	video.muted = false;
  });


//autoplay

function toggleMute(){
  video.muted = !video.muted;
}

let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 5000);
}

function alertFunc() {
	//document.getElementById("playit").click();
  //console.log("Hello!");
}

$( document ).ready(function() {
	
	myFunction();
    //console.log( "ready!" );
});

//document.getElementById("mybutton").addEventListener("click", function () {
//	$("#loading").fadeOut();
//	video.play();
//})




 /*Modal Fix*/
 function resize() {
	var winHeight = $(window).height();
	console.log("winHeight: "+winHeight);
	$(".modal-autoheight .modal-body").css({
	  width: "auto",
	  height: (winHeight - (winHeight*0.2)) + "px"
	});
  }
  if(window.outerWidth >= 996) {
	$(function() {
		if ($(".modal-autoheight").length > 0) {
			$(document).on('show.bs.modal','.modal', function () {
				resize();
			  })
		  //$(".modal").on("show.bs.modal", alert('test12'));
		  $(window).on("resize", resize());
		}
	  });

  }

  
  
/*Move circle*/
if(window.outerWidth >= 996) {
	$( "#videocircle" ).insertAfter( $( "#intro" ) );
}
else $( "#intro" ).insertAfter( $( "#videocircle" ) );

  