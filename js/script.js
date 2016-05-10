$(document).ready(function(){
  $("label").hide();     
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

// $( '#name-input' ).select(function() {
//   if ($('#name-input').val().length > 0) {
//     $(".name-label").show(); 
//   } else if ($('#name-input').val() === "" ) {
//     $(".name-label").hide();  
//   } 
// }); 
   

