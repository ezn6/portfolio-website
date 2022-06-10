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
upBtn.addEventListener('click', () => {
  scrollIntoView('#home');
});

// Click the Project button to divide by category
const categoryBtn = document.querySelector('.work__categories');
const projects = document.querySelectorAll('.project');
const projectContainer = document.querySelector('.work__projects'); //animation
categoryBtn.addEventListener('click', (event) => {
  const filter =
    event.target.dataset.category || event.target.parentNode.dataset.category;
  if (filter == null) {
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.active');
  active.classList.remove('active');
  const target =
    event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
  target.classList.add('active');

  projectContainer.classList.add('animation');
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === 'all' || project.dataset.type === filter) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('animation');
  }, 300);
});

// Navbar toggle button

function scrollIntoView(selector) {
  document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}
