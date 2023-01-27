const navbarMenu = document.querySelector('#navMenuIcon');
const navbarClose = document.querySelector('#closeMenu');
const navbar = document.querySelector('#nav');

if (navbarMenu){
  navbarMenu.addEventListener('click', () => {
    navbar.classList.add('open')
  });
}

if (navbarClose){
  navbarClose.addEventListener('click', () => {
    navbar.classList.remove('open')
  });
}