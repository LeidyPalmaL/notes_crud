// Validación del formulario usando JavaScript
document.getElementById("loginForm").addEventListener("submit", function (event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Por favor, complete todos los campos.");
        event.preventDefault(); // Evitar que el formulario se envíe
    }
});