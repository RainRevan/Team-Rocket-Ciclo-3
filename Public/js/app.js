const btn = document.querySelector('#btn');
const formulario = document.querySelector('#form');
const respuesta = document.querySelector('#respuesta');

const getData = () => {
    const datos = new FormData(formulario);
    const datosProcesados = Object.fromEntries(datos.entries());
    formulario.reset();
    return datosProcesados;
}
const postData = async () => {
    const newUser = getData();
    try {
        const responde = await fetch('jdbc:postgresql://localhost:5432/RegistroUsuarios',){
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
        });
    
        if (respond.ok) {
        const response = await response.json();
        const {proyecto, nombre,email,organizacion} = jsonResponse;
        respuesta.innerHTML = 
        <ul>
        !Exito¡ Se guardó la siguiente información:
        <li>${proyecto}</li>
        <li>${nombre}</li>
        <li>${email}</li>
        <li>${organizacion}</li>
        </ul>
    }

    } catch(error){
        console.log(error);
    }
}
btn.addEventListener('click', (event) => {
    event.preventDefault();
    postData();
})
