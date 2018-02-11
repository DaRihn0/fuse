$(document).ready(function() {
    $("#menu").click(function(){
        $("#phone").slideToggle();
});
});
$(window).on('resize', function(){
      var win = $(this); //this = window
      if(win.width() > 500){ 
        $("#phone").css("display","none");
      }
});