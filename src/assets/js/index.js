const nav = document.querySelector(".bottom");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("bottom-active");
  } else {
    nav.classList.remove("bottom-active");
  }
}

$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});

$(".counter-count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        //chnage count up speed here
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

jQuery("#carousel").owlCarousel({
  autoplay: true,
  dots: false,
  nav: false,
  rewind: true,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 1,
    },

    1024: {
      items: 1,
    },

    1366: {
      items: 1,
    },
  },
});

jQuery("#carousel2").owlCarousel({
  autoplay: true,
  dots: true,
  nav: false,
  rewind: true,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 1,
    },

    1024: {
      items: 1,
    },

    1366: {
      items: 1,
    },
  },
});

$('.single-item').slick({
	infinite: false,
	autoplay: true,
  repeat: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: true,
	speed: 600,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		  }
		},
		{
			breakpoint: 768,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1
			}
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
});

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});
// The function toggles more (hidden) text when the user clicks on "Read more". The IF ELSE statement ensures that the text 'read more' and 'read less' changes interchangeably when clicked on.
$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});