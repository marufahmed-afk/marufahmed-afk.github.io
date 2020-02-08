const hamburger = document.querySelector('.ham');
const navbarLinks = document.querySelector('.navarea');
const crossNav = document.querySelector('.cross');

hamburger.addEventListener('click', () => {
    navbarLinks.classList.toggle('active-nav');
})

crossNav.addEventListener('click', () => {
    navbarLinks.classList.toggle('active-nav');
})