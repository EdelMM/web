//poo

//object literal
const producto = {
    nombre: 'Tablet',
    precio: 4559,
}




//object constructor
//tiene sintaxis similar a una funcion
//luego se le da un nombre
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

// CREAR FUNCIONES QUE SOLO SE UTILIZAN EN UN OBJETO EN ESPECIFICO
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`
}

const producto2 = new Producto('Xperia 5 III', 850);
const producto3 = new Producto('Audifonos', 250);

console.log(producto2);
console.log(producto3);

function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`
}
console.log(formatearProducto(producto2)); //Formatear de esta forma permite que este formato se use en otros objetos, dando como resultado
//que no sea legible y no tenga sentido,
console.log(producto2.formatearProducto());//pero formatear de esta forma permite que dicho formato solo pueda ser usado en el objeto, 
//o clase, ya ni se jajajaj, para el que fue creado










function Coche(nombre, modelo, motor, existencia){
    this.nombre = nombre;
    this.modelo = modelo;
    this.motor = motor;
    if (existencia === 'Disponible') {
        this.existencia = true;
    }else{
        this.existencia = false;
    }
}

const coche = new Coche('Nissan GT-R', 2024, 'V6 3.8l', 'Agotado');
const coche2 = new Coche('Pontiac Grand Am GT', 2001, 'V6 3.4l', 'Disponible');

Coche.prototype.formatearCoche = function(){
    return `El coche ${this.nombre} es del año ${this.modelo} y cuenta con un motor ${this.motor} y ahorita esta ${this.existencia}`
}


console.log(coche.formatearCoche());
console.log(coche2.formatearCoche());

