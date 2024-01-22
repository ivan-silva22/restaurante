import Producto from "./classProducto.js";

let formularioProducto = document.getElementById('form-producto');
let listaProductos = [];

formularioProducto.addEventListener('submit', prepararFormulario);

function prepararFormulario(e){
    e.preventDefault();
    console.log('hola mundo')
    crearProducto();
}

function crearProducto(){
    const nuevoProducto = new Producto(
        'Pizza',
        'Plato principal',
        'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg',
        4500,
        'Activo'
    )
    console.log(nuevoProducto);
    listaProductos.push(nuevoProducto);
    console.log(listaProductos)
    localStorage.setItem('listaProductos', JSON.stringify(listaProductos))
}