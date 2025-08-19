document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/get-next-name')
        .then(response => response.json())
        .then(data => {
            const nombreElemento = document.getElementById('nombre-catequizado');
            nombreElemento.textContent = data.name;
        })
        .catch(error => {
            console.error('Error al obtener el nombre:', error);
            const nombreElemento = document.getElementById('nombre-catequizado');
            nombreElemento.textContent = 'Ocurrió un error';
        });
});