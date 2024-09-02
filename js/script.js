// Toggle class active (Jika di tekan akan muncul / jika di tekan akan menghiang)
const navbarNav = document.querySelector('.navbar-nav');

// ketika Menu di Click
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// ketika click di luar side-bar maka side-bar akan tertutup
const hamburger = document.querySelector('#hamburger-menu');


document.addEventListener('click', function(e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  } 
});