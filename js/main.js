$(function () {
    $(document).scroll(function () {
      var $navbar = $("#navbar");
      var $brand = $('#navbar-brand');
      var $main = $('#main');
      var $nav = $("#nav");
      var $items = $('.nav-link, .dropdown-item')

        var $toggle = $('.navbar-toggler');
        if ($(this).scrollTop() > $main.height()) { 
          $items.toggleClass('small-fg', true)  
          $navbar.toggleClass('fixed-top', true)
          $brand[0].classList.replace('hide', 'show')
          $toggle.toggleClass('navbar-toggler-scrolled', true)

          if ($('.main').length > 0) {
            $navbar[0].classList.replace('eastBay-bg', 'snow-bg')
            $nav[0].classList.replace('snow-fg', 'eastBay-fg')
          } else {
            $('.page-title')[0].style.bottom = '70px'
          }
            
        } else {
          $items.toggleClass('small-fg', false)
          $navbar.toggleClass('fixed-top', false)
          $brand[0].classList.replace('show', 'hide')
          $toggle.toggleClass('navbar-toggler-scrolled', false)
           
          if ($('.main').length > 0) {
            $navbar[0].classList.replace('snow-bg', 'eastBay-bg')
            $nav[0].classList.replace('eastBay-fg', 'snow-fg')
          } else {
            $('.page-title')[0].style.bottom = '0px'
          }
        }
        
    });

    var sw = new Swiper('.swiper-container', {
      speed: 400,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
      zoom: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })

    AOS.init();
  });