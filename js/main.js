$(document).ready(function() {
  $('#nights').on('keyup', function() {
      var nights = +$(this).val();
      var dailyPrice = +$(this).closest('.tour').data('dailyPrice');
      $('#total').text(nights * dailyPrice);
      $('#nights-count').text($(this).val());
      $('#nights').on('focus', function() {
         $('#nights') .val(1);
      });
    });
  $('.menu-toggle').click(function(){
      $(this).toggleClass('menu-toggle--active');
      $('.nav_background>nav>ul ').toggleClass('clicked').toggleClass('menu-toggle--active');
    });
});
