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
    // const mailtoButton = document.querySelector('#mailAilu');

    formulario.addEventListener('submit', handleSubmit);

    async function handleSubmit(e) {
        e.preventDefault();
        const formularioData = new FormData(formulario);
        // var nombreUsuario = formularioData.get('nombre');
        // var mensajeUsuario = formularioData.get('mensaje');
        // var telefonoUsuario = formularioData.get('telefono');
        // var emailUsuario = formularioData.get('email');
        
        // mailtoButton.setAttribute('href', `mailto:santiagopintus@gmail.com?subject=Consulta de ${nombreUsuario}&body=${mensajeUsuario} \nTeléfono: ${telefonoUsuario} \nE-mail: ${emailUsuario}`);
        // mailtoButton.setAttribute('target', '_blank');
        // mailtoButton.click();
        const response = await fetch(this.action, {
            method: this.method,
            body: formularioData,
            headers: {
                'Accept': 'application/json'
            }
        })
        if (response.ok) {
            this.reset();
            alert('El mensaje se envió correctamente.');
        }
    }
}
