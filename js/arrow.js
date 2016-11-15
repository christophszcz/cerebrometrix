$(document).ready(function(){
  $('.btn-circle.btn-lg').hover(function(){
    $('.glyphicon-menu-down').addClass('shadedDownArrow');
    },
    function(){       
    $('.glyphicon-menu-down').removeClass('shadedDownArrow');   
    } 
  );
});

 