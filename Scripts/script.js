const navbarSection = document.querySelector('#navbar-section');
const closeBtn = document.querySelector('#toggle-nav');
let navState = 0;
const toggleNav = (x) => {
  x.classList.toggle('change');
  navbarSection.classList.toggle('opened');
  navbarSection.classList.toggle('none', false);
};
