let menu = document.querySelector('#menu');
let header = document.querySelector('header');
let navbar = document.querySelector('.navbar');
let liMenu = document.querySelectorAll('.navbar ul li');
let sign = document.getElementById('sign');
let allSign = document.getElementById('sgn-reg-all');
let closee = document.getElementById('close');
let login = document.getElementById('login')
let register = document.getElementById('register')
let btnSignColor = document.getElementById('btn-sign-color')

menu.onclick = function (){
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  liMenu.forEach(li => {
    li.onclick= function (){
      menu.classList.remove('fa-times');
      navbar.classList.remove('active');
    }
  });
}

window.onscroll = function (){
  if(this.scrollY >= 120){
    header.style.background = '#44444488'
  }else{
    header.style.background = 'transparent'
  }
}

sign.onclick = function(){
  allSign.classList.add('active')
  closee.style.display = 'block'
  sign.style.display = 'none'
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
closee.onclick = function(){
  allSign.classList.remove('active')
  closee.style.display = 'none'
  sign.style.display = 'block'
}

function loginf(){
  login.style.left = "50px"
  register.style.left = "-400px"
  btnSignColor.style.left= "0px"
}

function registerf(){
    login.style.left = "-400px"
    register.style.left = "50px"
    btnSignColor.style.left= "110px"
}
// swiber team

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination:{
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0: {
      slidesPerView: 1.3,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
