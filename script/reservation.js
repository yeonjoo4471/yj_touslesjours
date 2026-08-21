// 메가 메뉴
$(function () {
  $('.gnb_item').on('mouseenter', function () {
    $('.gnb_item').removeClass('is-active');
    $('.mega_menu').removeClass('is-open');

    $(this).addClass('is-active');
    $(this).find('.mega_menu').addClass('is-open');
  });

  $('header').on('mouseleave', function () {
    $('.gnb_item').removeClass('is-active');
    $('.mega_menu').removeClass('is-open');
  });

  // 케이크 선택
  $('.cake-tabs button').on('click', function(){
    $('.cake-tabs button').removeClass('is-active');
    $(this).addClass('is-active');
  });

  // pc 네비 메뉴 그대로 햄버거 메뉴로 들고 오기
  const $mobileGnbList = $('.mobile_gnb_list');

  $('.gnb_item').each(function () {
    const $desktopItem = $(this);
    const title = $desktopItem.children('a').text().trim();
    const $subLinks = $desktopItem.find('.mega_list a');

    let subMenuHtml = '';

    $subLinks.each(function () {
      const href = $(this).attr('href');
      const text = $(this).text().trim();

      subMenuHtml += `
      <li><a href="${href}">${text}</a></li>
    `;
    });

    const menuHref = $desktopItem.children('a').attr('href');

    $mobileGnbList.append(`
  <li class="mobile_gnb_item">
    <div class="mobile_gnb_row">
      <a href="${menuHref}" class="mobile_gnb_link">
        ${title}
      </a>

      <button type="button" class="mobile_gnb_button" aria-label="${title} 하위 메뉴 열기">
        <i class="bi bi-chevron-down"></i>
      </button>
    </div>

    <ul class="mobile_sub_list">
      ${subMenuHtml}
    </ul>
  </li>
`);
  });

  // 햄버거 메뉴 열기
  $('.menu_btn').on('click', function () {
    $('.mobile_menu, .menu_dim').addClass('is-open');
    $('body').addClass('menu_open');
    $(this).attr('aria-expanded', 'true');
  });

  $('.mobile_close, .menu_dim').on('click', function () {
    $('.mobile_menu, .menu_dim').removeClass('is-open');
    $('body').removeClass('menu_open');
    $('.menu_btn').attr('aria-expanded', 'false');
  });

  $(document).on('click', '.mobile_gnb_button', function () {
    const $currentItem = $(this).closest('.mobile_gnb_item');

    $('.mobile_gnb_item').not($currentItem).removeClass('is-open');
    $('.mobile_gnb_item')
      .not($currentItem)
      .find('.mobile_sub_list')
      .stop()
      .slideUp(200);

    $currentItem.toggleClass('is-open');
    $currentItem.find('.mobile_sub_list').stop().slideToggle(200);
  });

  // 케이크 페이지네이션
  function setActiveCakePage($page){
    const $pages = $('.cake_page_num');
    const pageIndex = $pages.index($page);

    $pages.removeClass('is-active').removeAttr('aria-current');
    $page.addClass('is-active').attr('aria-current', 'page');

    $('.cake_page_prev').prop('disabled', pageIndex === 0);
    $('.cake_page_next').prop('disabled', pageIndex === $pages.length - 1);
  }

  $('.cake_page_num').on('click', function(){
    setActiveCakePage($(this));
  });

  $('.cake_page_prev').on('click', function(){
    const $previous = $('.cake_page_num.is-active').prevAll('.cake_page_num').first();

    if($previous.length){
      setActiveCakePage($previous);
    }
  });

  $('.cake_page_next').on('click', function(){
    const $next = $('.cake_page_num.is-active').nextAll('.cake_page_num').first();

    if($next.length){
      setActiveCakePage($next);
    }
  });

  // 탑 버튼
  const $topBtn = $('.top_btn');

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      $topBtn.addClass('is-show');
    } else {
      $topBtn.removeClass('is-show');
    }
  });

  $topBtn.on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });
});