document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    toggleIconoHamburguesa();
})

function toggleIconoHamburguesa() {
    const menuBoton = document.querySelector('.navbar-toggler')
    const hamburguesa = document.querySelector('.hamburguesa');

    menuBoton.addEventListener('click', () => {
        
        hamburguesa.classList.toggle('abierto');

    })
}
