const proyecto = document.getElementById("proyecto");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const organizacion = document.getElementById("organizacion");
const terminosycondiciones = document.getElementById("terminosycondiciones");
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

  if (proyecto.value.length < 1 || proyecto.value.trim() == "") {
    mostrarMensajeError("proyecto", "Nombre no valido*");
    condicion = false;
  }
  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("surname", "Nombre no valido");
    condicion = false;
  }
  if (email.value.length < 1 || email.value.trim() == "") {
    mostrarMensajeError("email", "Correo no valido*");
    condicion = false;
  }
  if (organizacion.value.length < 1 || organizacion.value.trim() == "") {
    mostrarMensajeError("organizacion", "organizacion no valida*");
    condicion = false;
  }
  if (!terminosycondiciones.checked) {
    mostrarMensajeError("terminosycondiciones", "Acepte*");
    condicion = false;
  } else {
    mostrarMensajeError("terminosycondiciones", "");
  }
  return condicion;
}
function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}
function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "Listo !!";
}