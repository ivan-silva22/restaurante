import Producto from "./classProducto.js";

let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];
console.log(listaProductos);

if (listaProductos.length > 0) {
  listaProductos = listaProductos.map(
    (producto) =>
      new Producto(
        producto.nombre,
        producto.categoria,
        producto.imagen,
        producto.precio,
        producto.estado
      )
  );
}

console.log(listaProductos);

cargarInicial();

function cargarInicial() {
  if (listaProductos.length > 0) {
    listaProductos.map((producto) => {
      if(producto.estado === 'Activo'){
        crearCard(producto);
      }
    });
  } else {
    let row = document.getElementById("row");
    row.innerHTML = `<div class='col col-sm-12'>
    <h1 class="texto-menu text-center">Noy hay productos</h1>
    </div>`;
  }
}

function crearCard(producto) {
  let row = document.getElementById("row");
    console.log(row);
    row.innerHTML += `<div class="col col-sm-12 card-menu">
    <div class="card-img">
        <img class="img-fluid" src=${producto.imagen} alt="">
    </div>
    <div class="card-bg py-2">
        <h5>${producto.nombre}</h5>
        <p>$${producto.precio} </p>
        <button class="btn">Agregar a pedidos</button>
    </div>
  </div>`;
}
