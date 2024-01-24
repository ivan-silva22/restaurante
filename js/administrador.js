import Producto from "./classProducto.js";
import { resumenValidacion } from "./helpers.js";

let formularioProducto = document.getElementById("form-producto");
let listaProductos = [];
let codigo = document.getElementById("codigo"),
  nombre = document.getElementById("nombre"),
  categoria = document.getElementById("categoria"),
  imagen = document.getElementById("imagen"),
  precio = document.getElementById("precio"),
  estado = document.getElementById("estado");
let objetoModal = new bootstrap.Modal(
  document.getElementById("modal")
);

let btnCrearProducto = document.getElementById("btnCrearProducto");

formularioProducto.addEventListener("submit", prepararFormulario);
btnCrearProducto.addEventListener("click", mostrarFormModal);

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
  objetoModal.backdrop
}
