$(document).ready(function(){
    checkSize();
    checkImageSize();
    checkTextSize();
    $(window).resize(checkSize);
    $(window).resize(checkImageSize);
    $(window).resize(checkTextSize);
});
 
function checkSize(){
  if($(".chris-description").css("margin-bottom") === "40px"){
    $(".small-before-chris").insertBefore(".small-after-chris");
    $(".small-before-chloe").insertBefore(".small-after-chloe");
  } else {
    $(".small-after-chris").insertBefore(".small-before-chris");
    $(".small-after-chloe").insertBefore(".small-before-chloe");
  }
}

aboutScroll2 = $('#about-scroll').offset().top;
margin2 = $('#about-scroll').outerHeight();
ourTeamScroll2 = $('#our-team-scroll').offset().top;
whatWeDoScroll2 = $('#what-we-do-scroll').offset().top;
getAQuoteScroll2 = $('#get-a-quote-scroll').offset().top;
contactScroll2 = $('#contact-scroll').offset().top;
windowHeight2 = $(window).height();
windowScroll2 = $(this).scrollTop();

function checkImageSize(){ 
  if($('.navbar-brand-name').css('font-size') === '19px'){
    $('.main-section').css('background-size', '768px  522px'); 
    $(".navbar-inverse .navbar-nav>li>a").css("color", "!important #fff");  
  } else if ($('.navbar-brand-name').css('font-size') === '17px'){
    $(".navbar-inverse .navbar-nav>li>a").css("color", "!important #fff");
  } else if (windowScroll2 > (aboutScroll2 + margin2 - windowHeight2) ){
    $('.main-section').css('background-size', '1366px 929px');
    $(".navbar-inverse .navbar-nav>li>a").css("color", "#000");
  }
}

function checkTextSize(){
  if($('.navbar-brand-name').css('font-size') === '19px'){
    $(".project-details-label").css('font-size', '12px');
  } else if($('.navbar-brand-name').css('font-size') === '17px'){
    $(".project-details-label").css('font-size', '10px');
  } else{
    $(".project-details-label").css('font-size', '14px'); 
  }
}