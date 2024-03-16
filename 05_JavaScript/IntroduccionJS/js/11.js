//Objetos
const producto = {
    nombreProducto: 'Playera roja',
    precio: 300,
    disponible: true
}

//Forma anterior
const precioP = producto.precio;
const nombreProducto = producto.nombreProducto;

console.log(precioP);
console.log(nombreProducto);


//Distructuring, sacar de una estructura
//cremos variable, y extraemos el valor 
const {precio, disponible} = producto;  

console.log(precio);
console.log(disponible);

