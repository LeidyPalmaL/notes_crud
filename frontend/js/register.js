const form = document.querySelector("#registroForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const mensajeError = document.getElementById("mensaje-error");
const toast = new bootstrap.Toast(document.querySelector(".toast"), {
    autohide: false // Desactivar el cierre automático
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        mostrarError("Las contraseñas no coinciden.");
    } else {
        mensajeError.textContent = "";
        form.submit(); // Envía el formulario si las contraseñas coinciden.
    }
});

function mostrarError(mensaje) {
    mensajeError.textContent = mensaje;
    toast.show();
}