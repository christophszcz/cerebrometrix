$(document).ready(function(){
  $(window).scroll();
  startNavItems();

  windowScroll = $(this).scrollTop();
  if (windowScroll >= 321){
    $('.navbar-inverse').removeClass('transparent');
    $('.navbar-inverse').addClass('black-navbar');
    $(".navbar").css("box-shadow", "0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2)");
    $(".navbar-inverse .navbar-nav>li>a").css("color", "#fff");
    $(".navbar-brand-name").css("color", "#fff");
    $(".navbar-inverse .navbar-toggle .icon-bar").css("background-color", "#fff");
    $(".navbar-header .navbar-toggle:hover .icon-bar").css("background-color", "#fff");  
  }

  $(window).resize(showingNavItems);
});
  
  // Resizing the browser while viewing the main section keeps the nav items white.

  function showingNavItems(){
    aboutScroll = $('#about-scroll').offset().top;
    margin = $('#about-scroll').outerHeight();
    windowHeight = $(window).height();
    windowScroll = $(this).scrollTop();
    if ( windowScroll < (aboutScroll + margin - windowHeight) && $(".navbar-inverse").hasClass('transparent') && ($('.navbar-brand-name').css('font-size') === '18px' || $('.navbar-brand-name').css('font-size') === '17px')){
      $(".nav-link").css("color", "#fff"); 
    }
  }

  function startNavItems(){
    if ( $('.navbar-brand-name').css('font-size') === '18px' || $('.navbar-brand-name').css('font-size') === '17px'){
      $(".nav-link").css("color", "#fff"); 
    }
  }
 

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
    $('.navbar-inverse').removeClass('black-navbar');
    $('.navbar-inverse').addClass('transparent');
    $(".navbar").css("box-shadow", "none");
    $(".navbar-inverse .navbar-nav>li>a").css("color", "#000");
    $(".navbar-brand-name").css("color", "#000");
    $(".navbar-header .navbar-toggle .icon-bar").css("background-color", "#000"); 
    $(".navbar-header .navbar-toggle:hover .icon-bar").css("background-color", "#fff");
    $('.navbar').css('transition' ,  'box-shadow 1s, background-color 1s');
  } else if (windowScroll >= (aboutScroll + margin - windowHeight)){
    $('.navbar-inverse').removeClass('transparent');
    $('.navbar-inverse').addClass('black-navbar');
    $(".navbar").css("box-shadow", "0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2)");
    $(".navbar-inverse .navbar-nav>li>a").css("color", "#fff");
    $(".navbar-brand-name").css("color", "#fff");
    $(".navbar-inverse .navbar-toggle .icon-bar").css("background-color", "#fff");
    $(".navbar-header .navbar-toggle:hover .icon-bar").css("background-color", "#fff");  
  }

  //Show toggle mennu items turn white if the links were black during smaller screen and on main section
  if ( windowScroll < (aboutScroll + margin - windowHeight) && $(".navbar-inverse").hasClass('transparent') && ($('.navbar-brand-name').css('font-size') === '18px' || $('.navbar-brand-name').css('font-size') === '17px')){
    $(".nav-link").css("color", "#fff"); 
  }

  //Show toggle menu if it the link color turns black after scrolling down.
  function keepWhiteIfSizeChange(){
    if ( (windowScroll < (aboutScroll + margin - windowHeight) && $('.brand-name').css('font-size') === '78px') || (windowScroll < (aboutScroll + margin - windowHeight) && $('.brand-name').css('font-size') === '50px') || (windowScroll < (aboutScroll + margin - windowHeight) && $('.brand-name').css('font-size') === '30px')) {
      $(".navbar-inverse .navbar-nav>li>a").css("color", "!important #fff");
    }  
  }
  

  // if ((windowScroll >= (aboutScroll + margin - windowHeight) && $('.brand-name').css('font-size') !== '78px') || (windowScroll >= (aboutScroll + margin - windowHeight) && $('.brand-name').css('font-size') !== '50px') || (windowScroll >= (aboutScroll + margin - windowHeight) && $('.brand-name').css('font-size') !== '30px') ){
  //   $(".navbar-inverse .navbar-nav>li>a").css("color", "!important #fff");
  // }

  if (windowScroll >= (aboutScroll + margin - windowHeight) && windowScroll <= (ourTeamScroll + marginOurTeam - windowHeight)){
    $('#efficient-section').delay( 700 ).fadeIn(3000);
    $('#manual-id-section').delay( 1400 ).fadeIn(3000);
    $('#cost-effective-section').delay( 2100 ).fadeIn(3000);
    $('#experts-section').delay( 2800 ).fadeIn(3000);
  }
 
});
