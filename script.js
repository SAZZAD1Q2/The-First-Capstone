const toggle = document.querySelector('.toggle');
const navLink = document.querySelector('.nav-mobile-links');

toggle.addEventListener('click', () => {
  navLink.classList.toggle('active');
});
