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

  $('.btn-circle.btn-lg').hover(function(){
    $('.glyphicon-menu-down').addClass('shadedDownArrow');
    },
    function(){       
    $('.glyphicon-menu-down').removeClass('shadedDownArrow');   
    } 
  );

  $(document).on('click', '.navbar-brand', function() { 
    $('li').removeClass('highlight');
    $('#about-link, #our-team-link, #work-link, #get-a-quote-link, #contact-link').css('color',  '#fff');
  });

  $(document).on('click', '.page-scroll.text', function() { 
    $('li').removeClass('highlight');
    $('#about-link, #our-team-link, #work-link, #get-a-quote-link, #contact-link').css('color',  '#fff');
    $(this).addClass('highlight');
    $(this).children().css('color',  'red');
    //$(this).children().addClass('indicate:active');
  }); 
});

$(window).scroll(function() {
  var aboutScroll = $('#about-scroll').offset().top,
    ourTeamScroll = $('#our-team-scroll').offset().top,
    margin = $('#about-scroll').outerHeight(),
    marginOurTeam = $('#our-team-scroll').outerHeight(),
    windowHeight = $(window).height(),
    windowScroll = $(this).scrollTop();
  if (windowScroll >= (aboutScroll + margin - windowHeight) && windowScroll <= (ourTeamScroll + marginOurTeam - windowHeight)){
    $('#efficient-section').delay( 1000 ).fadeIn(3000);
    $('#manual-id-section').delay( 2000 ).fadeIn(3000);
    $('#cost-effective-section').delay( 3000 ).fadeIn(3000);
    $('#experts-section').delay( 4000 ).fadeIn(3000);
  }
  if ( windowScroll < (aboutScroll + margin - windowHeight)){
    $(".navbar-inverse").css({"background-color": "transparent" , "border-color": "transparent" });
    $(".navbar").css("box-shadow", "none");
  } else if (windowScroll >= (aboutScroll + margin - windowHeight)){
    $(".navbar-inverse").css({"background-color": "#000" , "border-color": "#000"});
    $(".navbar").css("box-shadow", "0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2)");
  }
});