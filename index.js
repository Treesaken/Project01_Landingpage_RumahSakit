let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');
let close = document.getElementById('close')

menubar.onclick = () =>{
    menubar.style.display = 'none'
    close.style.display = 'block'
    // menubar.classList.toggle('bi-x');
    navbar.classList.toggle('active')
}

close.onclick = () =>{
    close.style.display = 'none'
    menubar.style.display = 'block'
    navbar.classList.toggle('active')
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    grabCursor: true,
    loop: true,

    // Pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Next and previous navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

