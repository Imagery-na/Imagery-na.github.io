new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: '.projects-pagination',
        type: 'bullets',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true
      }
});