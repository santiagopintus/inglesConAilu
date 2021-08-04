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

        /* Estas líneas comentadas son del método anterior de envío. */
        // var nombreUsuario = formularioData.get('nombre');
        // var mensajeUsuario = formularioData.get('mensaje');
        // var telefonoUsuario = formularioData.get('telefono');
        // var emailUsuario = formularioData.get('email');
        
        // mailtoButton.setAttribute('href', `mailto:santiagopintus@gmail.com?subject=Consulta de ${nombreUsuario}&body=${mensajeUsuario} \nTeléfono: ${telefonoUsuario} \nE-mail: ${emailUsuario}`);
        // mailtoButton.setAttribute('target', '_blank');
        // mailtoButton.click();

        /* Nuevo Método De envío */
        const response = await fetch(this.action, {
            method: this.method,
            body: formularioData,
            headers: {
                'Accept': 'application/json'
            }
        })

        mostrarAlerta(response.ok);

        function mostrarAlerta(estado) {
            const alerta = document.querySelector('#alerta');
            const parrafoAlerta = document.querySelector('#parrafoAlerta');
            const btnCerrar = document.querySelector('#btnCerrar');

            document.body.style.overflow = 'hidden';
            alerta.classList.add('d-block');

            if (estado) {
                //Si el envío es exitoso
                parrafoAlerta.classList.add('alerta__parrafo--exito');
                parrafoAlerta.innerHTML = 'Tu mensaje se envió correctamente';
            } else {
                //Si el envío da error
                parrafoAlerta.classList.add('alerta__parrafo--error');
                parrafoAlerta.innerHTML = 'No se pudo enviar tu mensaje';
            }

            btnCerrar.addEventListener('click', () => {
                document.body.style.overflow = 'visible';
                alerta.classList.remove('d-block');
            })
        }

    }
}
