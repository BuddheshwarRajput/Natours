// const menuBtn= document.getElementById('menu-btn');
// const options = document.getElementById('options');

// menuBtn.addEventListener('click', function() {
//     event.stopPropagation();
//   options.classList.toggle('hidden');
// });
// document.addEventListener('click', function(event) {
//     const target = event.target;
//     if (target !== options && !options.contains(target) && target !== menuBtn) {
//       options.classList.add('hidden');
//     }
//   });
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};
window.onclick = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};
var swiper = new Swiper(".home-slider", {
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});