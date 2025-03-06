
$(function(){



    $('#main-menu').on('mouseenter', function() {
      $(this).addClass('active');
    });

    $('#main-menu').on('mouseleave', function() {
        $(this).removeClass('active');
    });


    $(".main-menu").click(function() {
        $(this).toggleClass("on");
        $("#main-menu").toggleClass("on");
    });

    const swiper = new Swiper(".main-swiper", {
      speed: 3000,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".main-next",
        prevEl: ".main-prev",
      },
      pagination: {
        el: '.main-pagination',
        type: 'fraction',
      },
    });


    let swiper2 = null;

    function initializeSwiper() {
      if (window.innerWidth >= 1200 && !swiper2) {
        swiper2 = new Swiper(".farm-slider", {
          speed: 3000,
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 5000,
          },
          pagination: {
            el: '.farm-pagination',
            type: 'bullets',
          },
        });
      }
    }
    
    function destroySwiper() {
      if (window.innerWidth < 1200 && swiper2) {
        swiper2.destroy(true, true);
        swiper2 = null;
      }
    }
    
    // 페이지 로드 시 초기화
    initializeSwiper();
    
    // 윈도우 크기 조정 시 Swiper 초기화 또는 제거
    window.addEventListener('resize', function() {
      destroySwiper();
      initializeSwiper();
    });
    

});
