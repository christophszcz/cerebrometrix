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
  if($('.brand-name').css('font-size') === '50px'){
    $('#main-logo').height(150);
    $('.main-section').css('background-size', '770px 700px');
  } else if ($('.brand-name').css('font-size') === '30px'){
    $('#main-logo').height(100);
    $('.main-section').css('background-size', '536px 700px');
  } else {
    $('#main-logo').height(200);
    $('.main-section').css('background-size', '1280px 929px');
  }
}

function checkTextSize(){
  if($('.navbar-brand-name').css('font-size') === '19px'){
    $(".project-details-label").css('font-size', '12px');
  } else{
    $(".project-details-label").css('font-size', '14px'); 
  }
}