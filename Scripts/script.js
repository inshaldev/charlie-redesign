const navbarSection = document.querySelector('#navbar-section');
const closeBtn = document.querySelector('#toggle-nav');
const allNavLinks = document.querySelectorAll('.navbar-list-link');
let navState = 0;
const toggleNav = () => {
  closeBtn.classList.toggle('change');
  navbarSection.classList.toggle('opened');
  navbarSection.classList.remove('none');
};
allNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbarSection.classList.remove('opened');
    closeBtn.classList.remove('change');
  });
});
// NAVBAR DONE
window.addEventListener('scroll', () => {
  let currentSection = '';
  const allSections = document.querySelectorAll('.section');
  allSections.forEach((section) => {
    const sectionOffset = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionOffset - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  allNavLinks.forEach((li) => {
    li.classList.remove('navbar-link-active');
    if (li.classList.contains(currentSection)) {
      li.classList.add('navbar-link-active');
    }
  });
});
