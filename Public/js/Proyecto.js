// Formulario Proyecto//
const indicador = document.getElementById("indicador");
const descripcion = document.getElementById("descripcion");
const insumos = document.getElementById("insumos");
const link = document.getElementById("link");
const carta = document.getElementById("carta");
const myfile = document.getElementById("myfile");
const foto = document.getElementById("foto");
// llamado de formulario e inputs//
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (indicador.value.length < 1 || indicador.value.trim() == "") {
    //mostrarMensajeError("proyecto", "Nombre no valido*");//
    alert("Indicador no valido*");
    condicion = false;
  }
  if (descripcion.value.length < 1 || descripcion.value.trim() == "") {
    alert("Descripción no valida*");
    condicion = false;
  }
  if (insumos.value.length < 1 || insumos.value.trim() == "") {
    alert("Insumos no validos*");
    condicion = false;
  }
  if (link.value.length < 1 || link.value.trim() == "") {
    alert("link no valido*");
    condicion = false;
  }
  if (carta.value.length < 1 || carta.value.trim() == "") {
    alert("Carta no valida*");
    condicion = false;
  }
  if (myfile.value.length < 1 || myfile.value.trim() == "") {
    alert("link no valido*");
    condicion = false;
  }
  if (foto.value.length < 1 || foto.value.trim() == "") {
    alert("link no valido*");
    condicion = false;
  }
  else {
    alert("Datos guardados con exito a continuación diligencie la información de su proyecto");
  }
  return condicion;
}
function enviarFormulario() {
  window.location.replace("Proyecto.html");
}