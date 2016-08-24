$(document).ready(function(){
  $(".navbar-inverse").css({"background-color": "transparent" , "border-color": "transparent" });
  $(".navbar").css("box-shadow", "none");
});

$(window).scroll(function() {
  var aboutScroll = $('#about-scroll').offset().top,
    ourTeamScroll = $('#our-team-scroll').offset().top,
    whatWeDoScroll = $('#what-we-do-scroll').offset().top,
    getAQuoteScroll = $('#get-a-quote-scroll').offset().top,
    margin = $('#about-scroll').outerHeight(),
    marginOurTeam = $('#our-team-scroll').outerHeight(),
    marginGetAQuote = $('#get-a-quote-scroll').outerHeight(),
    windowHeight = $(window).height(),
    windowScroll = $(this).scrollTop();
  if ( windowScroll < (aboutScroll + margin - windowHeight)){
    $(".navbar-inverse").css({"background-color": "transparent" , "border-color": "transparent" });
    $(".navbar").css("box-shadow", "none");
  } else if (windowScroll >= (aboutScroll + margin - windowHeight)){
    $(".navbar-inverse").css({"background-color": "#000" , "border-color": "#000"});
    $(".navbar").css("box-shadow", "0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2)");
  }
  if (windowScroll >= (aboutScroll + margin - windowHeight) && windowScroll <= (ourTeamScroll + marginOurTeam - windowHeight)){
    $('#efficient-section').delay( 1000 ).fadeIn(3000);
    $('#manual-id-section').delay( 2000 ).fadeIn(3000);
    $('#cost-effective-section').delay( 3000 ).fadeIn(3000);
    $('#experts-section').delay( 4000 ).fadeIn(3000);
  }
  if (windowScroll >= (whatWeDoScroll + margin - windowHeight) && windowScroll <= (getAQuoteScroll + marginGetAQuote - windowHeight)){
    $('.what-we-do-title').delay( 500 ).fadeIn(3000);
  }
});
