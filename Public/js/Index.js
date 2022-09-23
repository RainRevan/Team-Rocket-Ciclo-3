const proyecto = document.getElementById("proyecto");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const organizacion = document.getElementById("organizacion");
const form = document.getElementById("form");
//const listInputs = document.getquerySelectorAll("input");//
//console.log(listInputs);//
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nombre.value.length <1 ||nombre.value.trim() == "") {
    console.error("error");
  }
  if (apellidos.value.length <1 ||apellidos.value.trim() == "") {
    console.error("error");
});
