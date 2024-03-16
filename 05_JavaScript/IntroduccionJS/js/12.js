//"use strict"        //ejecutar JS en modo estricto, así ya marca error
//Objetos
const producto = {
    nombreProducto: 'Playera roja',
    precio: 300,
    disponible: true
}
producto.imagen = 'imagen.png'  //insercion de propiedad
                                //se pueden hacer inserciones a variable const, pero si queremos que eso no suceda, hacemos lo siguente:
Object.freeze(producto);

producto.estado = 'usado';  //la propiedad estado ya no se agrega al objeto,
                            //no marca error porque JS se ejecuta en modo no estricto, pero si queremos que sea estricto, hay que indicarlo al inicio del archivo con "use strict"

console.log(producto);

const producto2 = {
    nombreProducto: 'Playera negra',
    precio: 350,
    disponible: true
}

//a diferencia de freeze, seal sí permite modificar el objeto, pero eliminar y agregar no
Object.seal(producto2);

producto2.precio = 45000;
console.log(producto2);

