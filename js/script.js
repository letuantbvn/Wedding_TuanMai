$(document).ready(function(){

	"use strict";
	
	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");

    var bgi = $("[data-background]");
    bgi.length > 0 && bgi.each(function() {
    	var e = $(this),
    	t = e.attr('data-background');
    	e.css({'background-image': 'url(' + t + ')'});
    });

    var progressBar = $('.progress-bar');
    progressBar.length > 0 && progressBar.each(function() {
    	var e = $(this),
    	t = e.attr('aria-valuenow');
    	e.css({'width': t + '%'});
    });

    /* =================================
	SCROLL TO
	=================================== */
	$('a[href^="#"]').on('click', function(event) {

	    var target = $(this.getAttribute('href'));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }

	});
	
	/* =================================
	NAVBAR 
	=================================== */
	var top = jQuery(document).scrollTop();
	var batas = 200;
	var navbar = jQuery('.navbar-main');
	var navbarnav = jQuery('.navbar-nav');
	var header = jQuery('.header');
	
	
	if ( top > batas ) {
		navbar.addClass('stiky');
		navbarnav.addClass('ml-auto');
	}
	jQuery(window).scroll(function () {
		top = jQuery(document).scrollTop();

		
		if ( top > batas ) {
			navbar.addClass('stiky');
		}else {
			navbar.removeClass('stiky'); 
			if(header.hasClass('header-2')){
				navbarnav.removeClass('ml-auto');
			}
			if(header.hasClass('header-5')){
				navbarnav.removeClass('ml-auto');
			}
		}

	});
	
	/* =================================
	BANNER ROTATOR IMAGE 
	=================================== */
	var slides = $(".full-screen"),
    b = slides.find('.item');
    b.each(function(){
        var e = $(this),
        ocImg = e.find('img').attr('src');
        e.css({'background-image': 'url(' + ocImg + ')'});
    });

    slides.owlCarousel({
	    // stagePadding: 50,
	    loop: true,
	    // margin: 10,
	    autoplay: true,
        autoplayTimeout: 5000,
	    nav: true,
	    dots: false,
	    animateIn: 'fadeIn',
        animateOut: 'fadeOut',
	    navText: [
	        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
	    ],
	    navContainer: '.banner .custom-nav',
	    items: 1,
	});

	/* =================================
	BACK TO TOP 
	=================================== */
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	

	var car_item_2 = $("#car_item_2");
	car_item_2.owlCarousel({
		margin: 30,
	    autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		items : 3,
		dots: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:2
			}
		}
	});

	var car_item_3 = $("#car_item_3");
	car_item_3.owlCarousel({
		margin: 30,
	    autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		items : 3,
		dots: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	var car_item_4 = $("#car_item_4");
	car_item_4.owlCarousel({
		margin: 30,
	    autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		items : 4,
		dots: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});

	var car_item_1 = $("#car_item_1");
	car_item_1.owlCarousel({
		margin: 0,
	    autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		items : 1,
		dots: true,
		loop: true
	});

	var car_item_1b = $("#car_item_1b");
	car_item_1b.owlCarousel({
		margin: 0,
	    autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		items : 1,
		dots: true,
		loop: true
	});

	var car_item_3b = $("#car_item_3b");
	car_item_3b.owlCarousel({
		margin: 30,
	    autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		items : 3,
		dots: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
	
	/* =================================
	MAGNIFIC POPUP
	=================================== */
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });

	$('.grid, .popup-gallery').magnificPopup({
	  delegate: 'a',
	  type: 'image',
	  tLoading: 'Loading image #%curr%...',
	  mainClass: 'mfp-img-mobile',
	  gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1]
	  },
	  image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
		  return item.el.attr('title') + '';
		}
	  }
	});

	/* =================================
	ISOTOP
	=================================== */	

	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		isFitWidth: true,
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});

	$grid.imagesLoaded().progress( function() {
		$grid.isotope('layout');
	});

	$('#filter2 a').on('click', function() {
 		$('#filter2 .active').removeClass('active');
		$(this).addClass('active');
 
		var selector = $(this).attr('data-filter');
		$grid.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine : "jquery"
			}
		});
		return false;
 	});

	var $gridv2 = $('.grid-v1');
	$gridv2.isotope({
		itemSelector: '.grid-item-v1',
		isFitWidth: true,
		filter: '.design',
		masonry: {
			columnWidth: '.grid-sizer-v1'
		}
	});

	$gridv2.imagesLoaded().progress( function() {
		$gridv2.isotope('layout');
	});

	$('.portfolio_filter a').on('click', function() {
 		$('.portfolio_filter .active').removeClass('active');
		$(this).addClass('active');
 
		var selector = $(this).attr('data-filter');
		$gridv2.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine : "jquery"
			}
		});
		return false;
 	});


	
});



  
  