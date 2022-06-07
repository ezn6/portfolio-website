'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const id = event.target.dataset.link;
  const target = event.target;
  const link = target.dataset.link;
  console.log(`id : ${id}`);
  console.log(`link: ${link}`);
  if (id == null) {
    return;
  }
  scrollIntoView(id);
});

// Handle click on "contact me" button on home
const contact = document.querySelector('.home__contact');
contact.addEventListener('click', (event) => {
  scrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down
const upBtn = document.querySelector('.fa-circle-arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    upBtn.classList.add('visible');
  } else {
    upBtn.classList.remove('visible');
  }
});
// Handle click on the "arrow up" button
upBtn.addEventListener('click', (event) => {
  // navbar로 스크롤 하면 안되는 이유? #home으로는 스크롤 된다.
  scrollIntoView('#home');
  // scrollIntoView('#navbar');
});

function scrollIntoView(selector) {
  document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}
