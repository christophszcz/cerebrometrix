$(document).ready(function(){
    checkSize();
    checkImageSize();
    $(window).resize(checkSize);
    $(window).resize(checkImageSize);
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
  } else {
    $('#main-logo').height(200);
  }
}