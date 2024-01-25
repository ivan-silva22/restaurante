import Producto from "./classProducto.js";

let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];

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

cargarInicial()

function cargarInicial() {
  if (listaProductos.length > 0) {
    listaProductos.map((producto) => crearCard(producto));
  }else {
    let row = document.getElementById("row");
    row.innerHTML = `<div class='col col-sm-12'>
        <h1 class="texto-menu text-center">Noy hay productos</h1>
        </div>`;
  }
}

function crearCard(producto) {
  if (producto.categoria === "Sandwiches" && producto.estado === "Activo") {
    let row = document.getElementById("row");
    row.innerHTML = `<div class="col-md-4 col-sm-12 card-menu">
        <div class="card-img">
            <img class="img-fluid" src=${producto.imagen} alt=${producto.nombre}>
        </div>
        <div class="card-bg ">
            <h5>${producto.nombre} </h5>
            <p>$${producto.precio}</p>
            <button class="btn">Agregar a pedidos</button>
        </div>
      </div>`;
  }else {
    let row = document.getElementById("row");
    row.innerHTML = `<div class='col col-sm-12'>
        <h1 class="texto-menu text-center">Noy hay productos</h1>
        </div>`;
  }
}
