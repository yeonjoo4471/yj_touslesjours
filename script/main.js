console.log('main.js 연결됨');

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
});