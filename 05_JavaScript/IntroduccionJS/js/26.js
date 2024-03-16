// This

//hacemos uso de this para referirnos a la propiedad que mencionamos, dentro del mismo objeto, sin tener 
//que mencionar el nombre del objeto cada que hacemos referencia a algo que queremos acceder, dentro del mismo objeto
const reservacion = {
    nombre: "Sergio",
    apellido: "Mendoza",
    precio: 5005,
    pagado: false,
    informacion: function () {
        if (this.pagado === true) {
            console.log(`El cliente ${this.nombre} ${this.apellido}, reservó por la cantidad de ${this.precio} pesos`);
        } else {
            console.log(`El cliente ${this.nombre} ${this.apellido}, quiso reservar pero nos debe ${this.precio} pesos`);
        }
    },
};

reservacion.informacion();


//en cambio si lo queremos hacer usando un arrow function, no va funcionar, para ello no debemos usar el THIS, 
//en ese caso debemos recurrir a llamar el nombre del objeto al que queremos hacer referencia
const reservacion2 = {
    nombre: "Edel",
    apellido: "Melendez",
    precio: 505,
    pagado: true,
    informacion: () => {
        console.log(
            `El cliente ${reservacion2.nombre} ${reservacion2.apellido}, reservó por la cantidad de ${reservacion2.precio} pesos`
        );
    },
};

//reservacion2.informacion();
