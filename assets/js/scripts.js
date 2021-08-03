document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    toggleIconoHamburguesa();
    enviandoCorreos();
})

function toggleIconoHamburguesa() {
    const menuBoton = document.querySelector('.navbar-toggler')
    const hamburguesa = document.querySelector('.hamburguesa');

    menuBoton.addEventListener('click', () => {
        
        hamburguesa.classList.toggle('abierto');

    })
}

function enviandoCorreos() {
    const formulario = document.querySelector('#formulario');
    const mailtoButton = document.querySelector('#mailAilu');

    formulario.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();
        const formularioData = new FormData(formulario);
        
        
    }
}
