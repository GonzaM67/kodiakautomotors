// Boton hamburguesa //

const menuToggle = document.getElementById('menu-toggle');
const menuCerrar = document.getElementById('menu-cerrar');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('activo');
    })
}

if (menuCerrar && navMenu) {
    menuCerrar.addEventListener('click', () => {
        navMenu.classList.remove('activo');
});
}