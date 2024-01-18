let formularioProducto = document.getElementById('form-producto');

formularioProducto.addEventListener('submit', prepararFormulario);

function prepararFormulario(e){
    e.preventDefault();
    console.log('hola mundo')
}
