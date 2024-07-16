// JS Bootstrap 5.3.3 
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// Tooltip de Bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Cambio de color del navbar (cambio de bg-opacity)
const navbar = document.getElementById("navbar-fixed");
window.onscroll = function funcionNav() {
    if (document.documentElement.scrollTop >= 210) {
        navbar.classList.add("bg-opacity-100");
        navbar.classList.remove("bg-opacity-10");
    }
    else {
        navbar.classList.add("bg-opacity-10");
        navbar.classList.remove("bg-opacity-100");
    }
};

// Alerta de envío exitoso (avisa si faltan datos)
let alertContainer = document.getElementById("alertContainer");
const showAlert = (message, type) => {
    // Elimina contenido del div para que solo se muestre el último alert
    while (alertContainer.firstChild) {
        alertContainer.removeChild(alertContainer.firstChild);
    }
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
    ].join("");
    alertContainer.append(wrapper);
};
const alertTrigger = document.getElementById("alertBtn");
if (alertTrigger) {
    alertTrigger.addEventListener("click", (event) => {
        /* Evita que se recargue la página */
        event.preventDefault();
        const name = document.getElementById('name').value;
        const lastName = document.getElementById('lastName').value;
        const message = document.getElementById('message').value;
        const checkboxOk = document.getElementById('accept').checked;
        /* Verificación de los input */
        if (name !== '' && lastName !== '' && message !== '' && checkboxOk) {
            showAlert(`<i class="fa-solid fa-circle-check"></i> ¡Mensaje enviado con éxito! Gracias ${name} ${lastName} `, "success");
        } else {
            showAlert(`<i class="fa-solid fa-circle-exclamation"></i> Faltan datos. Completa todos tus datos, agrega un mensaje y acepta los términos y condiciones para poder contactarte ...`, "danger");
        }
    });
}