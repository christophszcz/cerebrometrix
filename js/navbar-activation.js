$(window).scroll(function() {
  var aboutScroll = $('#about-scroll').offset().top,
    margin = $('#about-scroll').outerHeight(),
    ourTeamScroll = $('#our-team-scroll').offset().top,
    whatWeDoScroll = $('#what-we-do-scroll').offset().top,
    getAQuoteScroll = $('#get-a-quote-scroll').offset().top,
    contactScroll = $('#contact-scroll').offset().top,
    windowHeight = $(window).height(),
    windowScroll = $(this).scrollTop();
  if (windowScroll < (aboutScroll + margin - windowHeight)){
    $("li").removeClass('active');
  }
  if (windowScroll > (aboutScroll + margin - windowHeight)){
    $("li:first").addClass('active');
    $("li:nth-child(2)").removeClass('active');
  }
  if (windowScroll > (ourTeamScroll + margin - windowHeight)){
    $("li:first").removeClass('active');
    $("li:nth-child(2)").addClass('active');
    $("li:nth-child(3)").removeClass('active');
    $("li:nth-child(4)").removeClass('active');
    $("li:nth-child(5)").removeClass('active');
  }
   if (windowScroll > (whatWeDoScroll + margin - windowHeight)){
    $("li:nth-child(2)").removeClass('active');
    $("li:nth-child(3)").addClass('active');
    $("li:nth-child(4)").removeClass('active');
    $("li:nth-child(5)").removeClass('active');
  }
  if (windowScroll > (getAQuoteScroll + margin - windowHeight)){
    $("li:nth-child(2)").removeClass('active');
    $("li:nth-child(3)").removeClass('active');
    $("li:nth-child(4)").addClass('active');
    $("li:nth-child(5)").removeClass('active');
  }
  if (windowScroll > (contactScroll + margin - windowHeight)){
    $("li:nth-child(2)").removeClass('active');
    $("li:nth-child(3)").removeClass('active');
    $("li:nth-child(4)").removeClass('active');
    $("li:nth-child(5)").addClass('active');
  }
}); 

$(window).resize(function(){
var aboutScroll = $('#about-scroll').offset().top,
    margin = $('#about-scroll').outerHeight(),
    ourTeamScroll = $('#our-team-scroll').offset().top,
    whatWeDoScroll = $('#what-we-do-scroll').offset().top,
    getAQuoteScroll = $('#get-a-quote-scroll').offset().top,
    contactScroll = $('#contact-scroll').offset().top,
    windowHeight = $(window).height(),
    windowScroll = $(this).scrollTop();
  if (windowScroll < (aboutScroll + margin - windowHeight)){
    $("li").removeClass('active');
  }
  if (windowScroll > (aboutScroll + margin - windowHeight)){
    $("li:first").addClass('active');
    $("li:nth-child(2)").removeClass('active');
  }
  if (windowScroll > (ourTeamScroll + margin - windowHeight)){
    $("li:first").removeClass('active');
    $("li:nth-child(2)").addClass('active');
    $("li:nth-child(3)").removeClass('active');
    $("li:nth-child(4)").removeClass('active');
    $("li:nth-child(5)").removeClass('active');
  }
   if (windowScroll > (whatWeDoScroll + margin - windowHeight)){
    $("li:nth-child(2)").removeClass('active');
    $("li:nth-child(3)").addClass('active');
    $("li:nth-child(4)").removeClass('active');
    $("li:nth-child(5)").removeClass('active');
  }
  if (windowScroll > (getAQuoteScroll + margin - windowHeight)){
    $("li:nth-child(2)").removeClass('active');
    $("li:nth-child(3)").removeClass('active');
    $("li:nth-child(4)").addClass('active');
    $("li:nth-child(5)").removeClass('active');
  }
  if (windowScroll > (contactScroll + margin - windowHeight)){
    $("li:nth-child(2)").removeClass('active');
    $("li:nth-child(3)").removeClass('active');
    $("li:nth-child(4)").removeClass('active');
    $("li:nth-child(5)").addClass('active');
  }
});