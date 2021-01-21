// <!-JAvascript For Angualar-->
function myapptest()
{
	new WOW().init();
	$('button-collapse').sideNav();
	
	$('.jarallax').jarallax({
		speed: 0.2
	  });

	 
	  $('.carousel').carousel({
		touch: true // default
		})

	  $(document).ready(function() {

  const $valueSpan = $('.valueSpan2');
  const $value = $('#customRange11');
  $valueSpan.html($value.val());
  $value.on('input change', () => {

    $valueSpan.html($value.val());
  });
});

$(document).ready(function() {

	$('.chips-placeholder').materialChip({
	  placeholder: 'Enter another location',
	  secondaryPlaceholder: '92833',
	});
  })

$(document).ready(function() {

	const $valueSpan = $('.valueSpan3');
	const $value = $('#customRange12');
	$valueSpan.html($value.val());
	$value.on('input change', () => {
  
	  $valueSpan.html($value.val());
	});
  });

  $(document).ready(function() {

	const $valueSpan = $('.valueSpan4');
	const $value = $('#customRange13');
	$valueSpan.html($value.val());
	$value.on('input change', () => {
  
	  $valueSpan.html($value.val());
	});
  });

  $(document).ready(function() {

	const $valueSpan = $('.valueSpan2');
	const $value = $('#customRange11');
	$valueSpan.html($value.val());
	$value.on('input change', () => {
  
	  $valueSpan.html($value.val());
	});
  });

  $(function () {
	$('[data-toggle="tooltip"]').tooltip()
	})
}

function moreFilter()
{
	new WOW().init();
}

$(window).on("load, resize", function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
            $(".nav-link").addClass("nav-linkTextteal");
    }
});

jQuery.extend(jQuery.expr[':'], {
    focusable: function (el, index, selector) {
        return $(el).is('a, button, :input, [tabindex]');
    }
});

$(document).on('keypress', 'input,select', function (e) {
    if (e.which == 13) {
        e.preventDefault();
        // Get all focusable elements on the page
        var $canfocus = $(':focusable');
        var index = $canfocus.index(document.activeElement) + 1;
        if (index >= $canfocus.length) index = 0;
        $canfocus.eq(index).focus();
    }
});

// <!-JAvascript-->
// $(function() {
// 	$('#PreQual').modal('show');
// 	new WOW().init();
// 	$('button-collapse').sideNav();
// });

// Rating Initialization
// $(document).ready(function() {
// 	$('#rateMe2').mdbRate();
//   });





  

