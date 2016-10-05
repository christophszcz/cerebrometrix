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

function checkImageSize(){ 
  if($('.brand-name').css('font-size') === '78px'){
    $(".navbar-inverse .navbar-nav>li>a").css("color", "!important #fff");
  } else if($('.brand-name').css('font-size') === '50px'){
    $('.brand-name').css('margin-top', '0px');
    $('#main-logo').height(150);
    $('.main-section').css('background-size', '723px 476px');
    $(".navbar-inverse .navbar-nav>li>a").css("color", "!important #fff");
  } else if ($('.brand-name').css('font-size') === '30px'){
    $('#main-logo').height(100);
    $('.main-section').css('background-size', '480px 326px');
    $(".navbar-inverse .navbar-nav>li>a").css("color", "!important #fff");
    $('.main-logo').css('margin-top', '55px');
    $('.brand-name').css('margin-top', '0px');
  } else {
    $('#main-logo').height(200);
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