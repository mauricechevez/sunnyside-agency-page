const hamburger = document.getElementById('toggle-menu');
const menu = document.getElementsByClassName('nav-menu')[0];
const arrowUp = document.getElementsByClassName('arrow-up')[0];

// Event Listener
hamburger.addEventListener('click', mobileMenu);

function mobileMenu(){
    menu.classList.toggle("active");
    arrowUp.classList.toggle("active");
}