$(document).ready(function(){
  $('#efficient-section').fadeOut();
  $('#manual-id-section').fadeOut();
  $('#cost-effective-section').fadeOut();
  $('#experts-section').fadeOut();
  $('.what-we-do-title').fadeOut();

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