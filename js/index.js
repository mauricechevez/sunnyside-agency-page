const menu = document.getElementById('toggle-menu');

// Event Listener
menu.addEventListener('click', mobileMenu);

function mobilMenu(){
    menu.classList.toggle("active");
}