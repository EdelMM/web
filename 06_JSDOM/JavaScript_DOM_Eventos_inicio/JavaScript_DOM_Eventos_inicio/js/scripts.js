
//querySelector
const heading = document.querySelector('.header__texto h2');    //retorna maximo 1 elemento, y es el primero que encuentre
heading.textContent = 'Nuevo Heading modificado'
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
//console.log(enlaces[0]);
enlaces[0].textContent = 'Texto modificado';
enlaces[0].classList.add('nueva-clase');

//getElementByID
//const heading2 = document.getElementById('heading');
//console.log(heading2);


//Generar enlace
const nuevoEnlace = document.createElement('A');

//agregar href
nuevoEnlace.href = 'nuevo-enlace.html';

//agregar texto
nuevoEnlace.textContent = 'Texto agregado a enlace';

//agregar clase
nuevoEnlace.classList.add('navegacion__enlace');


//agregarlo al documento html
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
 
console.log(nuevoEnlace);

console.log(1);




window.onload = function(){
    console.log(2);
}
window.addEventListener('load', imprimir);

function imprimir(){
    console.log(3);
}
document.addEventListener('DOMContentLoaded', function(){
    console.log(4);
});

//la diferencia entre DOMContentLoaded y load, es que load espera a que todos los archivos se carguen, DOMContent solo espera que el HTML esté cargado
console.log(5);

/*window.onscroll = function(){
    console.log('scrolling....');
}*/  

 

//seleccionar un elemento html y asociarle un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);

//     //preventDefault nos es util al momento de validar formularios antes de enviarlos al servidor
//     evento.preventDefault();
//     console.log('enviando el formulario');
// });



 

//eventos en inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const form = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
form.addEventListener('submit', function(evento){
    evento.preventDefault();

    //validar formulario
    const { nombre, email, mensaje } = datos;
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; //return corta la ejecucion del codigo, por lo que ya no debería de pasar al log de enviando formulario si los campos estan vacios
    
    }//enviar formulario
    mostrarAlerta('El mensaje ha sido enviado correctamente');
});

function leerTexto(e){
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    console.log(datos);
}


function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error) {
        alerta.classList.add('error');
    }else{
        alerta.classList.add('envio');
    }
    form.appendChild(alerta);

    //desaparecer el aviso
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
