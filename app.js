// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Añadir el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista de amigos en el HTML
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y agregar cada nombre como un elemento <li>
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = `Amigo: ${amigo}`;
        li.classList.add('name-item');
        lista.appendChild(li);
    });
}

// Función para seleccionar un amigo al azar
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="result-item">El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Vaciar el array de amigos
    amigos = [];

    // Limpiar la lista de amigos en el HTML
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    // Limpiar el resultado del sorteo
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    // Mostrar un mensaje de confirmación
    alert("El juego ha sido reiniciado. Puedes empezar de nuevo.");
}