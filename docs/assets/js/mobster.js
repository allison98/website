; $(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    center: true,
    nav: true,
    dots: false,
    loop: true,
  });
});

wow = new WOW();

wow.init();

(function ($) {    
  "use strict"; 
/* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
  $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
      $(".fixed-top").addClass("top-nav-collapse");
      $(".fixed-top.hack").removeClass("navbar-dark");
      $(".fixed-top.hack").addClass("navbar-light");
		} else {
      $(".fixed-top").removeClass("top-nav-collapse");
      $(".fixed-top.hack").addClass("navbar-dark");
      $(".fixed-top.hack").removeClass("navbar-light");
		}
    });

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
  });
   /* Lightbox - Magnific Popup */
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
    
  /* Image Slider - Swiper */
  var imageSlider = new Swiper('.image-slider', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    breakpoints: {
      // when window is <= 580px
      580: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window is <= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window is <= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window is <= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      },

    }
  });

  /* Card Slider - Swiper */
  var cardSlider = new Swiper('.card-slider', {
    // autoplay: {
    //   delay: 8000,
    //   disableOnInteraction: false
    // },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
})(jQuery);
