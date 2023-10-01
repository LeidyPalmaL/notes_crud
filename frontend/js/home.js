document.addEventListener('DOMContentLoaded', init);


function init(){
    const note = document.getElementById('guardarNota');
    // const boton = document.querySelector('#botonTest');
    
    // window.addEventListener('click', cerrarModal);
    
    // Llama a la función para mostrar las notas al cargar la página
    obtenerNotasDesdeAPI();
    
    // boton.addEventListener("click", crearNotaNueva);
    note.addEventListener("click", crearNotaNueva)
}

function cerrarModal(){
    window.location.href = "/frontend/pages/home.html";
}
// Simulación de datos de notas desde una API

/* const notas = [
    {
        id: 1,
        titulo: "Nota 1",
        contenido: "Contenido largo de la primera nota que se truncará con tres puntos suspensivos al final. Contenido largo de la primera nota que se truncará con tres puntos suspensivos al final. Contenido largo de la primera nota que se truncará con tres puntos suspensivos al final."
    },
    {
        id: 2,
        titulo: "Nota 2",
        contenido: "Contenido largo de la segunda nota que se truncará con tres puntos suspensivos al final. Contenido largo de la segunda nota que se truncará con tres puntos suspensivos al final. Contenido largo de la segunda nota que se truncará con tres puntos suspensivos al final."
    },
    {
        id: 3,
        titulo: "Nota 3",
        contenido: "Contenido largo de la tercera nota que se truncará con tres puntos suspensivos al final. Contenido largo de la tercera nota que se truncará con tres puntos suspensivos al final. Contenido largo de la tercera nota que se truncará con tres puntos suspensivos al final."
    },
    {
        id: 4,
        titulo: "Nota 4",
        contenido: "Contenido largo de la cuarta nota que se truncará con tres puntos suspensivos al final."
    }
]; */

// Función para obtener y mostrar las notas desde la API
function obtenerNotasDesdeAPI() {
    // Realiza una solicitud GET a la API para obtener las notas
    fetch("http://localhost:3002/notes", {
        method: 'GET',
        headers: {
            "Accept": "*/*",
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin' // Agrega esta línea si es necesario
    })
        .then(response => response.json())
        .then(notasDesdeAPI => {
            // Llama a la función para mostrar las notas en la interfaz
            mostrarNotas(notasDesdeAPI);
        })
        .catch(error => {
            console.error('Error al obtener las notas desde la API:', error);
            // Puedes mostrar un mensaje de error al usuario, si es necesario
        });
}

// Función para mostrar las notas en la interfaz
function mostrarNotas(notas) {
    console.log(notas);
    const notaContainer = document.getElementById("notaContainer");

    // Limpia el contenido actual del contenedor de notas
    notaContainer.innerHTML = '';

    notas.forEach(nota => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-3");

        const cardHTML = `
        <div class="card mb-4">
        <div class="card-body overflow-hidden">
            <h5 class="card-title">${nota.titulo}</h5>
            <p class="card-text">${nota.contenido}</p>
        </div>
        <div class="card-footer text-right border-0">
            <button class="btn btn-primary mr-2" onclick="editarNota(${nota.id})">Editar</button>
            <button class="btn btn-danger" onclick="eliminarNota(${nota.id})">Eliminar</button>
        </div>
    </div>
    
        `;

        colDiv.innerHTML = cardHTML;
        notaContainer.appendChild(colDiv);
    });
}

function generarID() {
    return Math.random().toString(36).substring(2, 15);
}

function crearNotaNueva(event) {
    // Obtén los valores del título y contenido desde la modal
    const titulo = document.querySelector('#titulo').value;
    const contenido = document.querySelector('#contenido').value;

    // Luego, puedes usar esta función para obtener un nuevo ID único
    // const nuevoID = generarID();

    // Crea un objeto con los datos de la nota
    const nuevaNota = {
        // id: nuevoID,
        titulo: titulo,
        contenido: contenido
    };

    console.log(nuevaNota)

    fetch("http://127.0.0.1:3002/notes/create", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaNota),
        credentials: 'same-origin' // Agrega esta línea
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            cerrarModal();
        })
        .catch(error => {
            console.error('Error al enviar la nota:', error);
        })
    }

// Funciones de edición y eliminación (puedes personalizar estas funciones)
function editarNota(id) {
    alert("Editar nota con ID " + id);
}

function eliminarNota(id) {
    alert("Eliminar nota con ID " + id);
}
