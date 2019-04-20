$(function () {
    $(document).scroll(function () {
      var $navbar = $("#navbar");
      var $brand = $('#navbar-brand');
      var $main = $('#main');
      var $nav = $("#nav");
        var $toggle = $('.navbar-toggler');
        if ($(this).scrollTop() > $main.height()) {   
            $navbar[0].classList.replace('eastBay-bg', 'snow-bg')
            $nav[0].classList.replace('snow-fg', 'eastBay-fg')
            $navbar.toggleClass('fixed-top', true)
            // $brand.toggleClass('d-none', false)
            $brand[0].classList.replace('hide', 'show')
            $toggle.toggleClass('navbar-toggler-scrolled', true)
        } else {
            $navbar[0].classList.replace('snow-bg', 'eastBay-bg')
            $nav[0].classList.replace('eastBay-fg', 'snow-fg')
            $navbar.toggleClass('fixed-top', false)
            // $brand.toggleClass('d-none', true)
            $brand[0].classList.replace('show', 'hide')
            $toggle.toggleClass('navbar-toggler-scrolled', false)
        }
        
    });
  });