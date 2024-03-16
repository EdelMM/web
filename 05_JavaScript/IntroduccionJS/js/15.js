//Array methods

const meses = ['Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor', precio: 200},
    {nombre: 'Audifonos', precio: 320},
    {nombre: 'Teclado', precio: 250},
    {nombre: 'Mouse', precio: 150},
    {nombre: 'Móvil', precio: 700},
    {nombre: 'Laptop', precio: 1200},
    {nombre: 'Tablet', precio: 500},
];


//forEach
//para ver si el elemento que estamos buscando esta dentro del arreglo
meses.forEach(function(mes){
    if(mes == 'Febrero'){
        console.log('Febrero está en el arreglo');
    }
});

//includes
//para hacer lo anterior pero mas sencillo, nos arroja un booleano
//sirve mas para arreglos planos
let busqueda = meses.includes('Febrero');
console.log(busqueda);

//some
//para arreglos de objetos 
busqueda = carrito.some(function(producto){
    return producto.nombre === 'Mous'
})
console.log(busqueda);

//reduce
//para sumar los precios
busqueda = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);

console.log(busqueda);


//filter
//basicamente un filtro
busqueda = carrito.filter(function(producto){
    return producto.precio > 500
});
busqueda = carrito.filter(function(producto){
    return producto.nombre === 'Laptop'
})
console.log(busqueda);
