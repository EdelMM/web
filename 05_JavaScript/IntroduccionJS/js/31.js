
//con document se puede acceder a todo lo que tiene que ver con el html
//con queryselector, elegimos que queremos seleccionar, y dentro de los parentesis colocamos el ID que definimos
//en el html del elemento que queremos seleccionar, pero con un # antes de y todo entre comillas

//todo eso se asigna a una variable, esto son las buenas practicas

const boton = document.querySelector('#boton');

boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`))
});

if (Notification.permission == "granted") {
    new Notification('Aqui va una notificacion', {
        icon: 'img/ccj.png',
        body: 'aqui es el body'

    })
}