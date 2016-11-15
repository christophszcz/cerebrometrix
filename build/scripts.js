$(document).ready(function(){

  $('.btn-circle.btn-lg').hover(function(){
    $('.glyphicon-menu-down').addClass('shadedDownArrow');
    },
    function(){       
    $('.glyphicon-menu-down').removeClass('shadedDownArrow');   
    } 
  );
});

 
$(document).ready(function(){
  $('#efficient-section').fadeOut();
  $('#manual-id-section').fadeOut();
  $('#cost-effective-section').fadeOut();
  $('#experts-section').fadeOut();

  $('#name-input').keypress(function(){
    if ($(this).val().length > 0) {
      $(".name-label").addClass("show");
      $( ".name-label" ).animate({top: "20px"}, 300);  
    }
  }); 
  $('#name-input').keyup(function(){
    if ($(this).val().length === 0){
      $(".name-label").removeClass("show");
    }
  }); 

  $('#institution-input').keypress(function(){
    if ($(this).val().length > 0) {
      $(".institution-label").addClass("show");
      $( ".institution-label" ).animate({top: "8px"}, 300);
    }
  }); 
  $('#institution-input').keyup(function(){
    if ($(this).val().length === 0){
      $(".institution-label").removeClass("show");
    }
  });

  $('#email-input').keypress(function(){
    if ($(this).val().length > 0) {
      $(".email-label").addClass("show");
      $('.email-label').animate({top:'5px'}, 300); 
    }
  }); 
  $('#email-input').keyup(function(){
    if ($(this).val().length === 0){
      $(".email-label").removeClass("show");
    }
  });

  $('#phone-number-input').keypress(function(){
    if ($(this).val().length > 0) {
      $(".phone-number-label").addClass("show");
      $('.phone-number-label').animate({top: "5px"}, 300);
    }
  }); 
  $('#phone-number-input').keyup(function(){
    if ($(this).val().length === 0){
      $(".phone-number-label").removeClass("show");
    }
  });

  $('#project-details-textarea').keypress(function(){
    if ($(this).val().length > 0) {
      $(".project-details-label").addClass("show");
      $(".project-details-label").animate({top: "5px"}, 300);
    }
  }); 
  $('#project-details-textarea').keyup(function(){
    if ($(this).val().length === 0){
      $(".project-details-label").removeClass("show");
    }
  });
});
$(document).ready(function(){
  $(window).scroll();
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
  if ( (windowScroll < (aboutScroll + margin - windowHeight) && $('.brand-name').css('font-size') === '78px') || (windowScroll < (aboutScroll + margin - windowHeight) && $('.brand-name').css('font-size') === '50px') || (windowScroll < (aboutScroll + margin - windowHeight) && $('.brand-name').css('font-size') === '30px')) {
    $(".navbar-inverse .navbar-nav>li>a").css("color", "!important #fff");
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

$(function(){
  $('a[href^="#"]').click(function(e){
    var target = $(this).attr('href');
    var strip = target.slice(1);
    var anchor = $("a[name='" + strip + "']");

    e.preventDefault();
    $('html, body').animate({
      scrollTop: anchor.offset().top
    }, 'slow');
  });
});

$(document).ready(function(){
  checkSize();
  checkTextSize();
  whatWeDoCheckSize();
  checkImageSize();
  iPhoneFiveMainBackground();
  largeScreenViewing();
   
  $(window).resize(checkSize);
  $(window).resize(checkImageSize);
  $(window).resize(checkTextSize);
  $(window).resize(whatWeDoCheckSize);
  $(window).resize(iPhoneFiveMainBackground);
  $(window).resize(largeScreenViewing);
});

function iPhoneFiveMainBackground(){
  if($('.navbar-brand-name').css('font-size') === '18px' || $('.navbar-brand-name').css('font-size') === '17px'){
    $('section.main-section').css('background-size', '750px 687px');
  }
}

function largeScreenViewing(){
  if($('.main-logo').css('margin-top') === '400px'){
    $('section.main-section').css('background-size', '1366px 1100px');  
  } else if($('.navbar-brand-name').css('font-size') === '22px'){
    // $('section.contact-section').css('background-size', '1440px 1004px');
    $('.main-section').css('background-size', '2560px 900px');
    $('section.contact-section').css('background-size', '2560px 1004px');
  } else if($('.navbar-brand-name').css('font-size') === '24px'){
    $('section.main-section').css('background-size','2652px 900px');
    $('section.contact-section').css('background-size', '2652px 1004px');
  } else {
    $('section.contact-section').css('background-size', '1440px 1004px');
  }
}
 
function checkSize(){
  if($(".chris-description").css("margin-bottom") === "40px"){
    $(".small-before-chris").insertBefore(".small-after-chris");
    $(".small-before-chloe").insertBefore(".small-after-chloe");
  } else {
    $(".small-after-chris").insertBefore(".small-before-chris");
    $(".small-after-chloe").insertBefore(".small-before-chloe");
  }
}

function whatWeDoCheckSize(){
  if($(".hippocampal-subfield-segmentation-description").css("margin-bottom") === "40px"){
    $(".small-before-hippocampal-subfield-segmentation").insertBefore(".small-after-hippocampal-subfield-segmentation");
    $(".small-before-medial-temporal-lobe-cortex-segmentation").insertBefore(".small-after-medial-temporal-lobe-cortex-segmentation");
    $(".small-before-ventricular-segmentation").insertBefore(".small-after-ventricular-segmentation");
    $(".small-before-lesions-and-brain-tumor-segmentation").insertBefore(".small-after-lesions-and-brain-tumor-segmentation");
  } else {
    $(".small-after-hippocampal-subfield-segmentation").insertBefore(".small-before-hippocampal-subfield-segmentation");
    $(".small-after-medial-temporal-lobe-cortex-segmentation").insertBefore(".small-before-medial-temporal-lobe-cortex-segmentation");
    $(".small-after-ventricular-segmentation").insertBefore(".small-before-ventricular-segmentation");
    $(".small-after-lesions-and-brain-tumor-segmentation").insertBefore(".small-before-lesions-and-brain-tumor-segmentation");
  }
}

function checkImageSize(){ 
  if ($('.navbar-brand-name').css('font-size') === '20px' && $(".navbar-inverse").hasClass('transparent')) {
    $('.main-section').css('background-size', '1366px 929px');
    $(".navbar-inverse .navbar-nav>li>a").css("color", "#000");
  }else if ($('.navbar-brand-name').css('font-size') === '20px') {
    $('.main-section').css('background-size', '1366px 929px');
  } else if ($('.navbar-brand-name').css('font-size') === '18px'){
    $('.main-section').css('background-size', '1010px  750px'); 
    // $(".navbar-inverse .navbar-nav>li>a").css("color", "!important #fff");  
  } else if ($('.navbar-brand-name').css('font-size') === '17px'){
    // $('.main-section').css('background-size', '1010px  750px');
    $(".navbar-inverse .navbar-nav>li>a").css("color", "!important #fff");
  }
};

function checkTextSize(){
  if($('.navbar-brand-name').css('font-size') === '19px'){
    $(".project-details-label").css('font-size', '12px');
  } else if($('.navbar-brand-name').css('font-size') === '17px'){
    $(".project-details-label").css('font-size', '10px');
  } else{
    $(".project-details-label").css('font-size', '14px'); 
  }
}
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
    $("li:nth-child(3)").removeClass('active');
    $("li:nth-child(4)").removeClass('active');
    $("li:nth-child(5)").removeClass('active');
  }
  if (windowScroll > (ourTeamScroll + margin - windowHeight)){
    $("li:first").removeClass('active');
    $("li:nth-child(2)").addClass('active');
    $("li:nth-child(3)").removeClass('active');
    $("li:nth-child(4)").removeClass('active');
    $("li:nth-child(5)").removeClass('active');
  }
   if (windowScroll > (whatWeDoScroll + margin - windowHeight)){
     $("li:first").removeClass('active');
    $("li:nth-child(2)").removeClass('active');
    $("li:nth-child(3)").addClass('active');
    $("li:nth-child(4)").removeClass('active');
    $("li:nth-child(5)").removeClass('active');
  }
  if (windowScroll > (getAQuoteScroll + margin - windowHeight)){
    $("li:first").removeClass('active');
    $("li:nth-child(2)").removeClass('active');
    $("li:nth-child(3)").removeClass('active');
    $("li:nth-child(4)").addClass('active');
    $("li:nth-child(5)").removeClass('active');
  }
  if (windowScroll > (contactScroll + margin - windowHeight)){
    $("li:first").removeClass('active');
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