document.addEventListener("DOMContentLoaded", function () {
    // Asignar eventos a los botones después de que el DOM cargue
    document.getElementById("btnAgregarEstudio").addEventListener("click", agregarEstudio);
    document.getElementById("btnAgregarHabilidad").addEventListener("click", agregarHabilidad);
});

// Función para agregar un nuevo estudio
function agregarEstudio() {
    let input = document.getElementById("nuevoEstudio");
    let lista = document.getElementById("listaEstudios");

    if (input.value.trim() !== "") {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.innerHTML = `${input.value} <button onclick="eliminarElemento(this)">Eliminar</button>`;
        lista.appendChild(nuevoElemento); // Agregar el nuevo elemento a la lista
        input.value = ""; // Limpiar el campo de entrada
    } else {
        alert("Por favor, ingrese un estudio válido.");
    }
}

// Función para agregar una nueva habilidad
function agregarHabilidad() {
    let input = document.getElementById("nuevaHabilidad");
    let lista = document.getElementById("listaHabilidades");

    if (input.value.trim() !== "") {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.innerHTML = `${input.value} <button onclick="eliminarElemento(this)">Eliminar</button>`;
        lista.appendChild(nuevoElemento); // Agregar el nuevo elemento a la lista
        input.value = ""; // Limpiar el campo de entrada
    } else {
        alert("Por favor, ingrese una habilidad válida.");
    }
}

// Función para eliminar un elemento de la lista
function eliminarElemento(boton) {
    let li = boton.parentElement;
    li.remove();
}