document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/get-next-name')
        .then(response => response.json())
        .then(data => {
            const nombreElemento = document.getElementById('nombre-catequizado');
            const rezaTexto = document.getElementById('reza-text');
            
            nombreElemento.textContent = data.name;
            rezaTexto.textContent = data.message;
        })
        .catch(error => {
            console.error('Error al obtener el nombre:', error);
            const nombreElemento = document.getElementById('nombre-catequizado');
            const rezaTexto = document.getElementById('reza-text');
            
            nombreElemento.textContent = 'Ocurrió un error';
            rezaTexto.textContent = 'Ocurrió un error';
        });
});
