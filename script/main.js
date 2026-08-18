$(function(){
  $('.gnb_item').on('mouseenter', function(){
    $('.gnb_item').removeClass('is-active');
    $('.mega_menu').removeClass('is-open');

    $(this).addClass('is-active');
    $(this).find('.mega_menu').addClass('is-open');
  });

  $('header').on('mouseleave', function(){
    $('.gnb_item').removeClass('is-active');
    $('.mega_menu').removeClass('is-open');
  });

  const $topBtn = $('.top_btn');

  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 300) {
      $topBtn.addClass('is-show');
    } else {
      $topBtn.removeClass('is-show');
    }
  });

  $topBtn.on('click', function(){
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });
});