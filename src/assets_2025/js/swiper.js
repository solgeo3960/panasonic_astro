document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    // スライダーの設定
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}); 