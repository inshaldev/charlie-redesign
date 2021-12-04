const navbarSection = document.querySelector('#navbar-section');
const closeBtn = document.querySelector('#toggle-nav');
let navState = 0;
const toggleNav = () => {
  if (!navState) {
    navbarSection.className = 'navbar-section';
    navState = 1;
  } else if (navState) {
    navbarSection.className = 'navbar-section closed';
    navState = 0;
  }
};

closeBtn.addEventListener('click', () => {
  toggleNav();
});
