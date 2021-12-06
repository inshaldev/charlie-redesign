const navbarSection = document.querySelector('#navbar-section');
const closeBtn = document.querySelector('#toggle-nav');
let navState = 0;
const toggleNav = (x) => {
  x.classList.toggle('change');
  navbarSection.classList.toggle('opened');
  navbarSection.classList.toggle('none', false);
};
// NAVBAR DONE
// const toggleActiveLink = (link) => {
//   console.log(link.attributes[0].value);
// };

// const links = document.querySelectorAll('.navbar-list-link');
// links.forEach((link) =>
//   link.addEventListener('click', () => {
//     toggleActiveLink(link);
//   })
// );
window.addEventListener('scroll', () => {
  let currentSection = '';
  const allSections = document.querySelectorAll('.section');
  const allNavLinks = document.querySelectorAll('.navbar-list-link');
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
