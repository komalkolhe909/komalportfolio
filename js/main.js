$(document).ready(function() {


 // Below Code is for type.js
  var typed = $(".typed");
  if(typed.length != 0) {
    var options = {
      strings: ["Komal Kolhe.", "Designer.", "Developer.", "Freelancer."],
      typeSpeed: 100,
      loop: true
    };
      var typed = new Typed('.typed', options);
  }

  //end

  //Below code is for nav-link activation
  'use strict';
//
  var win = $(window)[0];
  //console.log(win);
  var hash = win.location.hash;
  var className = hash.substring(1);
  if(className) {
    $("."+className).addClass("active");
  } else {
    $(".header").addClass("active");
  }

//

  $('a[href^="#"]').on('click', function(e) {
    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });
    $(this).addClass('active');

  });
  //end

});
