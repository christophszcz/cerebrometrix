$(document).ready(function(){
  $('#name-input').keypress(function(){
    if ($(this).val().length > 0) {
      $(".name-label").addClass("show");
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
    }
  }); 
  $('#phone-number-input').keyup(function(){
    if ($(this).val().length === 0){
      $(".phone-number-label").removeClass("show");
    }
  });
});

$(window).scroll(function() {
  var aboutScroll = $('#about-scroll').offset().top,
    margin = $('#about-scroll').outerHeight(),
    windowHeight = $(window).height(),
    windowScroll = $(this).scrollTop();
  if ( windowScroll < (aboutScroll + margin - windowHeight)){
    $(".navbar-inverse").css({"background-color": "transparent" , "border-color": "transparent" });
    $(".navbar").css("box-shadow", "none");
  } else if (windowScroll >= (aboutScroll + margin - windowHeight)){
    $(".navbar-inverse").css({"background-color": "#000" , "border-color": "#000"});
    $(".navbar").css("box-shadow", "0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2)");
  }
});