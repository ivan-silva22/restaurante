import Producto from "./classProducto.js";
import { resumenValidacion } from "./helpers.js";

let formularioProducto = document.getElementById("form-producto");
let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];
console.log(listaProductos);
if (listaProductos.length !== 0) {
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
let codigo = document.getElementById("codigo"),
  nombre = document.getElementById("nombre"),
  categoria = document.getElementById("categoria"),
  imagen = document.getElementById("imagen"),
  precio = document.getElementById("precio"),
  estado = document.getElementById("estado");
let objetoModal = new bootstrap.Modal(document.getElementById("modal"));

let btnCrearProducto = document.getElementById("btnCrearProducto");

formularioProducto.addEventListener("submit", prepararFormulario);
btnCrearProducto.addEventListener("click", mostrarFormModal);

cargarInicial();

function cargarInicial() {
  if (listaProductos.length > 0) {
    listaProductos.map((producto, index) => crearFila(producto, index));
  }
}

function crearFila(producto, index) {
  let tbody = document.getElementById("tablaProdutos");
  console.log(tbody)
  tbody.innerHTML += `<tr>
  <th scope="row">${index + 1}</th>
  <td>${producto.nombre}</td>
  <td>${producto.categoria}</td>
  <td class="text-truncate tamanio-celda">
    ${producto.imagen}
  </td>
  <td>$${producto.precio} </td>
  <td>${producto.estado} </td>
  <td>
    <button class="btn btn-danger">
      <i class="bi bi-trash3"></i>
    </button>
    <button class="btn btn-warning">
      <i class="bi bi-pencil-square"></i>
    </button>
  </td>
</tr>`;
}

function prepararFormulario(e) {
  e.preventDefault();
  console.log("hola mundo");
  crearProducto();
}

function crearProducto() {
  let resumen = resumenValidacion(
    nombre.value,
    categoria.value,
    precio.value,
    imagen.value,
    estado.value
  );
  if (resumen.length === 0) {
    const nuevoProducto = new Producto(
      nombre.value,
      categoria.value,
      imagen.value,
      precio.value,
      estado.value
    );
    console.log(nuevoProducto);
    listaProductos.push(nuevoProducto);
    console.log(listaProductos);
    localStorage.setItem("listaProductos", JSON.stringify(listaProductos));
    limpiarFormulario();
  } else {
    let alerta = document.getElementById("alerta");
    alerta.innerHTML = resumen;
    alerta.className = "alert alert-danger mt-3";
  }
}

export function limpiarFormulario() {
  formularioProducto.reset();
}

function mostrarFormModal() {
  objetoModal.show();
  objetoModal.backdrop;
}
