(function ($) {
  "use strict"; // Start of use strict

  $(document).ready(function () {
   
    console.log("script here")

  });
})(jQuery); // End of use strict


jQuery(function($) {
  $('.slide').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    infinite: true,
    initialSlide: 2,
    prevArrow: $('#previous'),
    nextArrow: $('#next'),
    mobileFirst:true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
// Off canvas nav menu
$('#overlay').hide();

$('#toggle').click(function() {
  $('#overlay').toggle('300');
 });

 $('#toggleClose').click(function() {
  $('#overlay').toggle('300');
 });


});


