$(function(){


  (function($) {
    $.fn.writeText = function(content) {
        let contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 180);
    };
    
  })(jQuery);

  // input text for typing animation 
  $("#holder").writeText("FRONT-END DEVELOPER");

  // initialize wow.js
  new WOW().init();


  $('.projects__sliders').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/arrow-left-black.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/arrow-right-black.svg" alt=""></button>',
    responsive:[
      {
          breakpoint: 769,
          settings: {
              arrows: false,
              dots: true

          }

      }
  ]
  });
    

 
});