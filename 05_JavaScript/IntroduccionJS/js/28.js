// Clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El producto ${this.getNombre()} tiene un precio de ${
            this.precio
        } pero con IVA incluido es un precio de ${this.getPrecio()}`;
    }
    getPrecio() {
        return this.precio * 1.16;
    }
    getNombre() {
        return this.nombre;
    }
}
//asi se crean las clases, con la l=palabra reservada CLASS, y para darle los parametros
//no se hace en parentesis, ya que no lleva, sino que luego de abrir las llaves, creamos el constructor
//con esa palabra reservada, y dentro de los parentesis es donde vamos a agregar los parametros

const producto = new Producto("Xperia 5 III", 850);
const producto2 = new Producto("Audifonos", 250);


//herencia
class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio)
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y ahora su isbn es ${this.isbn}`
    }
}
const libro = new Libro('Biblia', 33, '351853412');


// console.log(producto.formatearProducto());
console.log(libro.formatearProducto());
console.log(libro);
