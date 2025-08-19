const catequizados = [
    "Nombre Apellido 1",
    "Nombre Apellido 2",
    "Nombre Apellido 3",
    "Nombre Apellido 4",
    "Nombre Apellido 5"
    // Agrega aquí todos los nombres de tu lista
];

function obtenerNombre() {
    let indice = localStorage.getItem('indiceCatequizado');
    if (indice === null) {
        indice = 0;
    } else {
        indice = parseInt(indice);
        indice = (indice + 1) % catequizados.length;
    }
    
    localStorage.setItem('indiceCatequizado', indice);
    return catequizados[indice];
}

document.addEventListener('DOMContentLoaded', () => {
    const nombreElemento = document.getElementById('nombre-catequizado');
    nombreElemento.textContent = obtenerNombre();
});