// Formulario Proyecto//
const proyecto = document.getElementById("proyecto");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const organizacion = document.getElementById("organizacion");
const terminosycondiciones = document.getElementById("terminosycondiciones");
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

  if (proyecto.value.length < 1 || proyecto.value.trim() == "") {
    //mostrarMensajeError("proyecto", "Nombre no valido*");//
    alert("Nombre no valido*");
    condicion = false;
  }
  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    alert("Nombre no valido*");
    condicion = false;
  }
  if (email.value.length < 1 || email.value.trim() == "") {
    alert("Correo no valido*");
    condicion = false;
  }
  if (organizacion.value.length < 1 || organizacion.value.trim() == "") {
    alert("Organización no valida*");
    condicion = false;
  }
  if (!terminosycondiciones.checked) {
    alert("Debe aceptar los términos y condiciones*");
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

//insertar registros//
/*$("#BtnRegistrarme").click(function(){
  var proyecto = document.getElementById("proyecto").value;
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var organizacion = document.getElementById("organizacion").value;
  db.transaction(function(transaction){
      var sql = "INSERT INTO organizacion(nom_proyecto,nombre,email,nom_organizacion) VALUES(?,?,?,?)";
      transaction.executeSql(sql,[proyecto,nombre,email,organizacion])
  });
});*/