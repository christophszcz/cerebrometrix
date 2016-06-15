$(window).scroll(function(){
  var windowScroll = $(this).scrollTop();
  $('.contact-information').css({
    'transform' : 'translateY(' + windowScroll2 + 'px)'
  });
});