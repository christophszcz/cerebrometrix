$(document).ready(function(){
  checkSize();
  checkTextSize();
  checkImageSize();

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
  if ($('.navbar-brand-name').css('font-size') === '20px' && $(".navbar-inverse").hasClass('transparent')) {
    $('.main-section').css('background-size', '1366px 929px');
    $(".navbar-inverse .navbar-nav>li>a").css("color", "#000");
  }else if ($('.navbar-brand-name').css('font-size') === '20px') {
    $('.main-section').css('background-size', '1366px 929px');
  } else if ($('.navbar-brand-name').css('font-size') === '18px'){
    $('.main-section').css('background-size', '1010px  687px'); 
    $(".navbar-inverse .navbar-nav>li>a").css("color", "!important #fff");  
  } else if ($('.navbar-brand-name').css('font-size') === '17px'){
    $('.main-section').css('background-size', '1010px  687px');
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