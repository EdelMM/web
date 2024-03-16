//Objetos
const producto = {
    nombreProducto: 'Playera roja',
    precio: 300,
    disponible: true
}

console.log(producto);

//los objetos se crean como una variable, pero en vez de un valor, lleva unas llaves {}
// y dentro de ellas declaramos nuestras variables, separadas por una , , ahi se llaman propiedades
//si queremos acceder a una propiedad, se hace de la siguiente manera:

console.log(producto.precio);
//de esta manera estamos diciendo que queremos imprimir la propiedad PRECIO que está en el objeto PRODUCTO.

//otra forma es la siguiente
console.log(producto["disponible"]);