$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $(".fnc-header").css("background" , "#fff");
    }

    else{
      $(".fnc-header").css("background" , "#333");   
    }
  })
})