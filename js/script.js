$(document).ready(function(){

  $('.btn-circle.btn-lg').hover(function(){
    $('.glyphicon-menu-down').addClass('shadedDownArrow');
    },
    function(){       
    $('.glyphicon-menu-down').removeClass('shadedDownArrow');   
    } 
  );

  // $(document).on('click', '.navbar-brand', function() { 
  //   $('li').removeClass('highlight');
  //   $('#about-link, #our-team-link, #work-link, #get-a-quote-link, #contact-link').css('color',  '#fff');
  // });

  // $(document).on('click', '.page-scroll.text', function() { 
  //   $('li').removeClass('highlight');
  //   $('#about-link, #our-team-link, #work-link, #get-a-quote-link, #contact-link').css('color',  '#fff');
  //   $(this).addClass('highlight');
  //   $(this).children().css('color',  'red');
    //$(this).children().addClass('indicate:active');
  // }); 
});